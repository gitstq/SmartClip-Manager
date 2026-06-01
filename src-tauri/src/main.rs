// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{CustomMenuItem, Manager, SystemTray, SystemTrayEvent, SystemTrayMenu, SystemTrayMenuItem, GlobalShortcutManager};
use std::sync::{Arc, Mutex};
use serde::{Serialize, Deserialize};
use chrono::{DateTime, Utc};
use uuid::Uuid;
use regex::Regex;

// Clipboard item structure
#[derive(Debug, Clone, Serialize, Deserialize)]
struct ClipboardItem {
    id: String,
    content: String,
    #[serde(rename = "type")]
    item_type: String,
    timestamp: i64,
    tags: Vec<String>,
    size: usize,
}

// Clipboard storage
struct ClipboardStorage {
    items: Vec<ClipboardItem>,
}

impl ClipboardStorage {
    fn new() -> Self {
        Self { items: Vec::new() }
    }

    fn add_item(&mut self, content: String) -> ClipboardItem {
        let item_type = Self::detect_type(&content);
        let tags = Self::extract_tags(&content);
        let size = content.len();
        
        let item = ClipboardItem {
            id: Uuid::new_v4().to_string(),
            content,
            item_type,
            timestamp: Utc::now().timestamp_millis(),
            tags,
            size,
        };
        
        self.items.insert(0, item.clone());
        
        // Keep only last 1000 items
        if self.items.len() > 1000 {
            self.items.truncate(1000);
        }
        
        item
    }

    fn detect_type(content: &str) -> String {
        // Check for URL
        let url_regex = Regex::new(r"^https?://").unwrap();
        if url_regex.is_match(content) {
            return "link".to_string();
        }
        
        // Check for code patterns
        let code_patterns = [
            r"^\s*(function|const|let|var|import|export|class|if|for|while|return)",
            r"[{};]$",
            r"^\s*<\w+",
        ];
        
        for pattern in &code_patterns {
            if Regex::new(pattern).unwrap().is_match(content) {
                return "code".to_string();
            }
        }
        
        // Check for image data
        if content.starts_with("data:image/") {
            return "image".to_string();
        }
        
        "text".to_string()
    }

    fn extract_tags(content: &str) -> Vec<String> {
        let mut tags = Vec::new();
        let lower = content.to_lowercase();
        
        // Programming languages
        if lower.contains("javascript") || lower.contains("js") {
            tags.push("javascript".to_string());
        }
        if lower.contains("typescript") || lower.contains("ts") {
            tags.push("typescript".to_string());
        }
        if lower.contains("python") || lower.contains("py") {
            tags.push("python".to_string());
        }
        if lower.contains("rust") || lower.contains("cargo") {
            tags.push("rust".to_string());
        }
        if lower.contains("react") {
            tags.push("react".to_string());
        }
        
        // Common tags
        if lower.contains("npm") || lower.contains("yarn") || lower.contains("pnpm") {
            tags.push("npm".to_string());
        }
        if lower.contains("git") {
            tags.push("git".to_string());
        }
        if lower.contains("github") {
            tags.push("github".to_string());
        }
        if lower.contains("api") {
            tags.push("api".to_string());
        }
        
        tags
    }

    fn get_items(&self) -> Vec<ClipboardItem> {
        self.items.clone()
    }

    fn delete_item(&mut self, id: &str) {
        self.items.retain(|item| item.id != id);
    }

    fn clear(&mut self) {
        self.items.clear();
    }
}

fn main() {
    // Create system tray menu
    let quit = CustomMenuItem::new("quit".to_string(), "Quit");
    let show = CustomMenuItem::new("show".to_string(), "Show SmartClip");
    let tray_menu = SystemTrayMenu::new()
        .add_item(show)
        .add_native_item(SystemTrayMenuItem::Separator)
        .add_item(quit);

    let tray = SystemTray::new().with_menu(tray_menu);

    // Shared clipboard storage
    let clipboard_storage = Arc::new(Mutex::new(ClipboardStorage::new()));

    tauri::Builder::default()
        .system_tray(tray)
        .on_system_tray_event(|app, event| match event {
            SystemTrayEvent::LeftClick {
                position: _,
                size: _,
                ..
            } => {
                let window = app.get_window("main").unwrap();
                window.show().unwrap();
                window.set_focus().unwrap();
            }
            SystemTrayEvent::MenuItemClick { id, .. } => match id.as_str() {
                "quit" => {
                    std::process::exit(0);
                }
                "show" => {
                    let window = app.get_window("main").unwrap();
                    window.show().unwrap();
                    window.set_focus().unwrap();
                }
                _ => {}
            },
            _ => {}
        })
        .setup(move |app| {
            // Register global shortcut (Cmd/Ctrl+Shift+V)
            let window = app.get_window("main").unwrap();
            let window_clone = window.clone();
            
            app.global_shortcut_manager()
                .register("CmdOrCtrl+Shift+V", move || {
                    if window_clone.is_visible().unwrap() {
                        window_clone.hide().unwrap();
                    } else {
                        window_clone.show().unwrap();
                        window_clone.set_focus().unwrap();
                    }
                })
                .unwrap();

            // Initialize clipboard storage
            let storage = clipboard_storage.clone();
            app.manage(storage);

            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            get_clipboard_items,
            add_clipboard_item,
            delete_clipboard_item,
            clear_clipboard,
            copy_to_clipboard
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

// Tauri commands
#[tauri::command]
fn get_clipboard_items(storage: tauri::State<Arc<Mutex<ClipboardStorage>>>) -> Vec<ClipboardItem> {
    storage.lock().unwrap().get_items()
}

#[tauri::command]
fn add_clipboard_item(
    content: String,
    storage: tauri::State<Arc<Mutex<ClipboardStorage>>>
) -> ClipboardItem {
    storage.lock().unwrap().add_item(content)
}

#[tauri::command]
fn delete_clipboard_item(
    id: String,
    storage: tauri::State<Arc<Mutex<ClipboardStorage>>>
) {
    storage.lock().unwrap().delete_item(&id);
}

#[tauri::command]
fn clear_clipboard(storage: tauri::State<Arc<Mutex<ClipboardStorage>>>) {
    storage.lock().unwrap().clear();
}

#[tauri::command]
fn copy_to_clipboard(content: String) -> Result<(), String> {
    // This would use the clipboard crate in a real implementation
    // For now, we return Ok to indicate success
    Ok(())
}
