import { useState, useEffect, useCallback, useMemo } from "react";
import { 
  Clipboard, 
  Search, 
  Trash2, 
  Copy, 
  FileText, 
  Code, 
  Link, 
  Image,
  Settings,
  History,
  Filter,
  CheckCircle2,
  X
} from "lucide-react";
import { format } from "date-fns";
import Fuse from "fuse.js";

// Types
interface ClipboardItem {
  id: string;
  content: string;
  type: "text" | "code" | "link" | "image";
  timestamp: number;
  tags: string[];
  size: number;
}

// Mock data for demonstration
const mockData: ClipboardItem[] = [
  {
    id: "1",
    content: "npm install @tauri-apps/api",
    type: "code",
    timestamp: Date.now() - 1000 * 60 * 2,
    tags: ["npm", "install"],
    size: 28,
  },
  {
    id: "2",
    content: "https://github.com/tauri-apps/tauri",
    type: "link",
    timestamp: Date.now() - 1000 * 60 * 15,
    tags: ["github", "tauri"],
    size: 35,
  },
  {
    id: "3",
    content: "Meeting scheduled for tomorrow at 2 PM with the design team to discuss the new UI mockups.",
    type: "text",
    timestamp: Date.now() - 1000 * 60 * 30,
    tags: ["meeting", "design"],
    size: 85,
  },
  {
    id: "4",
    content: `function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}`,
    type: "code",
    timestamp: Date.now() - 1000 * 60 * 45,
    tags: ["typescript", "function"],
    size: 120,
  },
  {
    id: "5",
    content: "https://react.dev/learn/thinking-in-react",
    type: "link",
    timestamp: Date.now() - 1000 * 60 * 60,
    tags: ["react", "docs"],
    size: 40,
  },
  {
    id: "6",
    content: "Remember to buy milk, eggs, and bread from the grocery store on the way home.",
    type: "text",
    timestamp: Date.now() - 1000 * 60 * 90,
    tags: ["shopping", "personal"],
    size: 72,
  },
  {
    id: "7",
    content: "const [count, setCount] = useState(0);",
    type: "code",
    timestamp: Date.now() - 1000 * 60 * 120,
    tags: ["react", "hooks"],
    size: 38,
  },
  {
    id: "8",
    content: "The quick brown fox jumps over the lazy dog. This is a sample text for testing the clipboard functionality.",
    type: "text",
    timestamp: Date.now() - 1000 * 60 * 180,
    tags: ["sample"],
    size: 98,
  },
];

// Type icons
const typeIcons = {
  text: FileText,
  code: Code,
  link: Link,
  image: Image,
};

// Type colors
const typeColors = {
  text: "#6366f1",
  code: "#22c55e",
  link: "#3b82f6",
  image: "#f59e0b",
};

function App() {
  const [items, setItems] = useState<ClipboardItem[]>(mockData);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<"all" | "text" | "code" | "link" | "image">("all");
  const [selectedItem, setSelectedItem] = useState<ClipboardItem | null>(mockData[0]);
  const [toast, setToast] = useState<{ message: string; visible: boolean }>({ message: "", visible: false });

  // Initialize Fuse.js for search
  const fuse = useMemo(() => {
    return new Fuse(items, {
      keys: ["content", "tags"],
      threshold: 0.4,
      includeScore: true,
    });
  }, [items]);

  // Filter and search items
  const filteredItems = useMemo(() => {
    let result = items;

    // Apply type filter
    if (selectedFilter !== "all") {
      result = result.filter((item) => item.type === selectedFilter);
    }

    // Apply search
    if (searchQuery.trim()) {
      const searchResults = fuse.search(searchQuery);
      result = searchResults.map((r) => r.item);
    }

    return result;
  }, [items, selectedFilter, searchQuery, fuse]);

  // Get counts for each type
  const typeCounts = useMemo(() => {
    return {
      all: items.length,
      text: items.filter((i) => i.type === "text").length,
      code: items.filter((i) => i.type === "code").length,
      link: items.filter((i) => i.type === "link").length,
      image: items.filter((i) => i.type === "image").length,
    };
  }, [items]);

  // Show toast notification
  const showToast = useCallback((message: string) => {
    setToast({ message, visible: true });
    setTimeout(() => setToast({ message: "", visible: false }), 2000);
  }, []);

  // Copy to clipboard
  const copyToClipboard = useCallback(async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      showToast("Copied to clipboard!");
    } catch (err) {
      showToast("Failed to copy");
    }
  }, [showToast]);

  // Delete item
  const deleteItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    if (selectedItem?.id === id) {
      setSelectedItem(null);
    }
    showToast("Item deleted");
  }, [selectedItem, showToast]);

  // Clear all items
  const clearAll = useCallback(() => {
    setItems([]);
    setSelectedItem(null);
    showToast("All items cleared");
  }, [showToast]);

  // Detect content type
  const detectType = (content: string): ClipboardItem["type"] => {
    if (content.startsWith("http://") || content.startsWith("https://")) {
      return "link";
    }
    if (content.includes("function") || content.includes("const") || content.includes("import")) {
      return "code";
    }
    return "text";
  };

  // Format file size
  const formatSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <div className="logo-icon">
            <Clipboard size={20} color="white" />
          </div>
          <span>SmartClip</span>
        </div>

        <div className="search-container">
          <Search size={18} className="search-icon" style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
          <input
            type="text"
            className="search-input"
            placeholder="Search clipboard history..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ paddingLeft: "40px" }}
          />
          <span className="search-shortcut">⌘K</span>
        </div>

        <div className="stats">
          <div className="stat-item">
            <History size={16} />
            <span>{items.length} items</span>
          </div>
          <button className="action-btn" onClick={clearAll} title="Clear all">
            <Trash2 size={16} />
          </button>
          <button className="action-btn" title="Settings">
            <Settings size={16} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-title">
            <Filter size={14} />
            <span>Filter by Type</span>
          </div>
          
          {[
            { key: "all", label: "All Items", icon: Clipboard },
            { key: "text", label: "Text", icon: FileText },
            { key: "code", label: "Code", icon: Code },
            { key: "link", label: "Links", icon: Link },
            { key: "image", label: "Images", icon: Image },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              className={`filter-btn ${selectedFilter === key ? "active" : ""}`}
              onClick={() => setSelectedFilter(key as typeof selectedFilter)}
            >
              <Icon size={18} />
              <span>{label}</span>
              <span className="filter-count">{typeCounts[key as keyof typeof typeCounts]}</span>
            </button>
          ))}
        </aside>

        {/* Clipboard List */}
        <main className="clipboard-list">
          {filteredItems.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">
                <Clipboard size={40} color="var(--text-muted)" />
              </div>
              <div className="empty-title">No items found</div>
              <div className="empty-desc">
                {searchQuery 
                  ? "Try adjusting your search terms" 
                  : "Your clipboard history is empty. Copy something to get started!"}
              </div>
            </div>
          ) : (
            filteredItems.map((item) => {
              const Icon = typeIcons[item.type];
              return (
                <div
                  key={item.id}
                  className={`clipboard-item ${selectedItem?.id === item.id ? "active" : ""}`}
                  onClick={() => setSelectedItem(item)}
                >
                  <div className={`item-icon ${item.type}`}>
                    <Icon size={20} />
                  </div>
                  <div className="item-content">
                    <div className="item-preview">
                      {item.type === "code" ? (
                        <code>{item.content}</code>
                      ) : (
                        item.content
                      )}
                    </div>
                    <div className="item-meta">
                      <span className="item-type">{item.type}</span>
                      <span>{format(item.timestamp, "MMM d, h:mm a")}</span>
                      <span>{formatSize(item.size)}</span>
                    </div>
                  </div>
                  <div className="item-actions">
                    <button
                      className="action-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(item.content);
                      }}
                      title="Copy"
                    >
                      <Copy size={16} />
                    </button>
                    <button
                      className="action-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteItem(item.id);
                      }}
                      title="Delete"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </main>

        {/* Detail Panel */}
        {selectedItem && (
          <aside className="detail-panel">
            <div className="detail-header">
              <span className="detail-title">Content Details</span>
              <div className="detail-actions">
                <button
                  className="detail-btn"
                  onClick={() => copyToClipboard(selectedItem.content)}
                >
                  <Copy size={16} />
                  <span>Copy</span>
                </button>
                <button
                  className="detail-btn secondary"
                  onClick={() => deleteItem(selectedItem.id)}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <div className="detail-content">{selectedItem.content}</div>

            <div className="detail-info">
              <div className="info-row">
                <span className="info-label">Type</span>
                <span className="info-value" style={{ textTransform: "capitalize" }}>
                  {selectedItem.type}
                </span>
              </div>
              <div className="info-row">
                <span className="info-label">Created</span>
                <span className="info-value">
                  {format(selectedItem.timestamp, "MMMM d, yyyy 'at' h:mm a")}
                </span>
              </div>
              <div className="info-row">
                <span className="info-label">Size</span>
                <span className="info-value">{formatSize(selectedItem.size)}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Tags</span>
                <span className="info-value">
                  {selectedItem.tags.join(", ") || "None"}
                </span>
              </div>
            </div>
          </aside>
        )}
      </div>

      {/* Toast Notification */}
      {toast.visible && (
        <div className="toast success">
          <CheckCircle2 size={18} className="toast-icon" />
          <span>{toast.message}</span>
        </div>
      )}
    </div>
  );
}

export default App;
