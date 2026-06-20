// DesignMaster Tracker - Core Logic and State Management

// 1. Dataset of all LLD & HLD topics pointing to sliced chapter PDF files
const topicsData = [
  // ==================== LLD BASICS ====================
  {
    id: "lld-basics-ch1",
    tab: "lld-basics",
    chapter: "Chapter 01",
    title: "What is an Object-Oriented Design Interview",
    page: 1,
    originalPage: 1,
    pdfPath: "LLD/html/chapter_01.html",
    difficulty: "easy",
    focus: ["Interview structure", "What interviewers look for", "Focus on quality", "Design vs algorithm coding"]
  },
  {
    id: "lld-basics-ch2",
    tab: "lld-basics",
    chapter: "Chapter 02",
    title: "A Framework for the OOD Interview",
    page: 1,
    originalPage: 6,
    pdfPath: "LLD/html/chapter_02.html",
    difficulty: "easy",
    focus: ["4-step framework", "Step 1: Gather requirements", "Step 2: Identify core objects", "Step 3: Class design & code", "Step 4: Deep dive"]
  },
  {
    id: "lld-basics-ch3",
    tab: "lld-basics",
    chapter: "Chapter 03",
    title: "OOP Fundamentals & SOLID Principles",
    page: 1,
    originalPage: 19,
    pdfPath: "LLD/html/chapter_03.html",
    difficulty: "medium",
    focus: ["Encapsulation & Abstraction", "Inheritance vs Composition", "Polymorphism", "SOLID principles (SRP, OCP, LSP, ISP, DIP)"]
  },

  // ==================== LLD QUESTIONS ====================
  {
    id: "lld-q-parking-lot",
    tab: "lld-questions",
    chapter: "Chapter 04",
    title: "Design a Parking Lot",
    page: 1,
    originalPage: 45,
    pdfPath: "LLD/html/chapter_04.html",
    difficulty: "medium",
    focus: ["Vehicle inheritance (Car, Van, Truck)", "Spot assignment strategies", "Ticket & payment handling", "Concurrency control"]
  },
  {
    id: "lld-q-movie-booking",
    tab: "lld-questions",
    chapter: "Chapter 05",
    title: "Design a Movie Ticket Booking System",
    page: 1,
    originalPage: 73,
    pdfPath: "LLD/html/chapter_05.html",
    difficulty: "hard",
    focus: ["Seat allocation & locking", "Showtimes, cinemas & halls", "Payment transactions", "Concurrency (avoid double booking)"]
  },
  {
    id: "lld-q-unix-find",
    tab: "lld-questions",
    chapter: "Chapter 06",
    title: "Design a Unix File Search System",
    page: 1,
    originalPage: 100,
    pdfPath: "LLD/html/chapter_06.html",
    difficulty: "medium",
    focus: ["Specification pattern", "Composite design pattern", "Filtering criteria (name, size, extension)", "Extensible rule engine"]
  },
  {
    id: "lld-q-vending-machine",
    tab: "lld-questions",
    chapter: "Chapter 07",
    title: "Design a Vending Machine",
    page: 1,
    originalPage: 122,
    pdfPath: "LLD/html/chapter_07.html",
    difficulty: "medium",
    focus: ["State design pattern", "Ready, No Money, Dispensing, Out of Stock states", "Inventory tracking", "Coin/Cash handler"]
  },
  {
    id: "lld-q-elevator",
    tab: "lld-questions",
    chapter: "Chapter 08",
    title: "Design an Elevator System",
    page: 1,
    originalPage: 144,
    pdfPath: "LLD/html/chapter_08.html",
    difficulty: "hard",
    focus: ["Elevator control algorithms (SCAN, LOOK)", "Request dispatching", "Internal button panel vs external hall panels", "Direction/State handling"]
  },
  {
    id: "lld-q-grocery-store",
    tab: "lld-questions",
    chapter: "Chapter 09",
    title: "Design a Grocery Store System",
    page: 1,
    originalPage: 167,
    pdfPath: "LLD/html/chapter_09.html",
    difficulty: "hard",
    focus: ["Checkout terminals", "Barcode scanners & scales", "Product lookup (PLU vs SKU)", "Coupons, discounts & membership"]
  },
  {
    id: "lld-q-tictactoe",
    tab: "lld-questions",
    chapter: "Chapter 10",
    title: "Design a Tic Tac Toe Game",
    page: 1,
    originalPage: 194,
    pdfPath: "LLD/html/chapter_10.html",
    difficulty: "easy",
    focus: ["Grid representation", "Player turns & validation", "Win/draw checking algorithm (O(1) optimal)", "Extensible grid sizes"]
  },
  {
    id: "lld-q-blackjack",
    tab: "lld-questions",
    chapter: "Chapter 11",
    title: "Design a Blackjack Game",
    page: 1,
    originalPage: 212,
    pdfPath: "LLD/html/chapter_11.html",
    difficulty: "medium",
    focus: ["Card, Deck & Hand models", "Blackjack game rules", "Polymorphic player hand vs dealer hand", "Hit, stand, double down actions"]
  },
  {
    id: "lld-q-shipping-locker",
    tab: "lld-questions",
    chapter: "Chapter 12",
    title: "Design a Shipping Locker System",
    page: 1,
    originalPage: 242,
    pdfPath: "LLD/html/chapter_12.html",
    difficulty: "medium",
    focus: ["Locker sizing & availability", "Package assignment", "One-time passcode (OTP) generation & verification", "Timeout policies"]
  },
  {
    id: "lld-q-atm",
    tab: "lld-questions",
    chapter: "Chapter 13",
    title: "Design an ATM System",
    page: 1,
    originalPage: 266,
    pdfPath: "LLD/html/chapter_13.html",
    difficulty: "hard",
    focus: ["State design pattern (Idle, Authenticated, Card Read, Transaction)", "Cash dispenser capacity", "Card reader & PIN validator", "Bank gateway API integration"]
  },
  {
    id: "lld-q-restaurant",
    tab: "lld-questions",
    chapter: "Chapter 14",
    title: "Design a Restaurant Management System",
    page: 1,
    originalPage: 291,
    pdfPath: "LLD/html/chapter_14.html",
    difficulty: "hard",
    focus: ["Table booking & allocation", "Order & billing lifecycle", "Kitchen order ticket (KOT) workflow", "Staff roles (Server, Chef, Receptionist)"]
  },

  // ==================== HLD BASICS ====================
  {
    id: "hld-basics-scale",
    tab: "hld-basics",
    chapter: "Chapter 02",
    title: "Scale From Zero To Millions Of Users",
    page: 1,
    originalPage: 4,
    pdfPath: "HLD/html/chapter_02.html",
    difficulty: "easy",
    focus: ["Single server setup", "Database replication", "Load balancing", "Caching & CDN", "Horizontal scaling", "Sharding & Msg Queues"]
  },
  {
    id: "hld-basics-envelope",
    tab: "hld-basics",
    chapter: "Chapter 03",
    title: "Back-of-the-envelope Estimation",
    page: 1,
    originalPage: 33,
    pdfPath: "HLD/html/chapter_03.html",
    difficulty: "easy",
    focus: ["Power of two conversions", "Latency numbers (Jeff Dean cheat sheet)", "Availability SLAs", "QPS, storage, and bandwidth estimates"]
  },
  {
    id: "hld-basics-framework",
    tab: "hld-basics",
    chapter: "Chapter 04",
    title: "A Framework For System Design Interviews",
    page: 1,
    originalPage: 39,
    pdfPath: "HLD/html/chapter_04.html",
    difficulty: "easy",
    focus: ["Step 1: Understand & scope", "Step 2: Propose high-level design", "Step 3: Design deep dive", "Step 4: Wrap-up & trade-offs"]
  },
  {
    id: "hld-basics-hashing",
    tab: "hld-basics",
    chapter: "Chapter 06",
    title: "Design Consistent Hashing",
    page: 1,
    originalPage: 72,
    pdfPath: "HLD/html/chapter_06.html",
    difficulty: "medium",
    focus: ["Rehashing problem", "Consistent hashing ring", "Virtual nodes strategy", "Adding/removing nodes mitigation"]
  },
  {
    id: "hld-basics-wrapup",
    tab: "hld-basics",
    chapter: "Chapter 30",
    title: "The Learning Continues",
    page: 1,
    originalPage: 722,
    pdfPath: "HLD/html/chapter_30.html",
    difficulty: "easy",
    focus: ["Next steps in System Design", "Reviewing real-world architectures", "Practice & mock interviews", "Continuous reading list"]
  },

  // ==================== HLD QUESTIONS ====================
  {
    id: "hld-q-ratelimiter",
    tab: "hld-questions",
    chapter: "Chapter 05",
    title: "Design A Rate Limiter",
    page: 1,
    originalPage: 50,
    pdfPath: "HLD/html/chapter_05.html",
    difficulty: "medium",
    focus: ["Rate limiting algorithms (Token Bucket, Leaky Bucket, Sliding Window Log/Counter)", "Distributed rate limiting (Redis, locks, local memory)", "HTTP headers & error status code (429)"]
  },
  {
    id: "hld-q-keyvalue",
    tab: "hld-questions",
    chapter: "Chapter 07",
    title: "Design A Key-value Store",
    page: 1,
    originalPage: 85,
    pdfPath: "HLD/html/chapter_07.html",
    difficulty: "hard",
    focus: ["CAP theorem trade-offs", "Sloppy Quorum & Hinted Handoff", "Vector clocks for conflict resolution", "SSTables & LSM Trees (write/read path)", "Gossip protocol"]
  },
  {
    id: "hld-q-idgen",
    tab: "hld-questions",
    chapter: "Chapter 08",
    title: "Design A Unique ID Generator In Distributed Systems",
    page: 1,
    originalPage: 108,
    pdfPath: "HLD/html/chapter_08.html",
    difficulty: "medium",
    focus: ["Multi-master replication", "UUID pros/cons", "Ticket Server (Flickr model)", "Twitter Snowflake algorithm (Timestamp, Worker ID, Sequence)"]
  },
  {
    id: "hld-q-urlshortener",
    tab: "hld-questions",
    chapter: "Chapter 09",
    title: "Design A URL Shortener",
    page: 1,
    originalPage: 116,
    pdfPath: "HLD/html/chapter_09.html",
    difficulty: "easy",
    focus: ["API endpoints (POST / GET redirects)", "HTTP status codes (301 vs 302)", "Hash function algorithms (Base62 encoding vs MD5/SHA-1)", "Scale database storage"]
  },
  {
    id: "hld-q-webcrawler",
    tab: "hld-questions",
    chapter: "Chapter 10",
    title: "Design A Web Crawler",
    page: 1,
    originalPage: 128,
    pdfPath: "HLD/html/chapter_10.html",
    difficulty: "hard",
    focus: ["DFS vs BFS selection", "HTML Downloader & Content Filter", "Politeness policy (Robots.txt, delay)", "URL Frontier prioritization & queues", "DNS cache optimization"]
  },
  {
    id: "hld-q-notifications",
    tab: "hld-questions",
    chapter: "Chapter 11",
    title: "Design A Notification System",
    page: 1,
    originalPage: 148,
    pdfPath: "HLD/html/chapter_11.html",
    difficulty: "medium",
    focus: ["Supported channels (iOS push, Android push, Email, SMS)", "Rate limiting notifications", "Message queue architectures", "Reliable delivery (retry mechanism, idempotency)"]
  },
  {
    id: "hld-q-newsfeed",
    tab: "hld-questions",
    chapter: "Chapter 12",
    title: "Design A News Feed System",
    page: 1,
    originalPage: 164,
    pdfPath: "HLD/html/chapter_12.html",
    difficulty: "medium",
    focus: ["Feed publication API vs News feed retrieval API", "Fanout-on-write (push model) vs Fanout-on-read (pull model)", "Hybrid fanout model", "Cache hierarchy"]
  },
  {
    id: "hld-q-chat",
    tab: "hld-questions",
    chapter: "Chapter 13",
    title: "Design A Chat System",
    page: 1,
    originalPage: 177,
    pdfPath: "HLD/html/chapter_13.html",
    difficulty: "hard",
    focus: ["WebSocket vs Long Polling", "Stateless HTTP servers vs Stateful Chat servers", "Presence server architecture (Heartbeats)", "Key-value NoSQL (Cassandra/HBase) storage"]
  },
  {
    id: "hld-q-autocomplete",
    tab: "hld-questions",
    chapter: "Chapter 14",
    title: "Design A Search Autocomplete System",
    page: 1,
    originalPage: 200,
    pdfPath: "HLD/html/chapter_14.html",
    difficulty: "hard",
    focus: ["Data structure: Trie (Prefix tree)", "Trie cache & serialization", "Data gathering service (real-time stream vs batch)", "Query service optimization"]
  },
  {
    id: "hld-q-youtube",
    tab: "hld-questions",
    chapter: "Chapter 15",
    title: "Design YouTube",
    page: 1,
    originalPage: 219,
    pdfPath: "HLD/html/chapter_15.html",
    difficulty: "hard",
    focus: ["Video upload flow vs Video streaming flow", "DAG (Directed Acyclic Graph) for transcoding", "CDN optimization & caching", "Video chunking & HLS/DASH streaming"]
  },
  {
    id: "hld-q-gdrive",
    tab: "hld-questions",
    chapter: "Chapter 16",
    title: "Design Google Drive",
    page: 1,
    originalPage: 246,
    pdfPath: "HLD/html/chapter_16.html",
    difficulty: "hard",
    focus: ["Block server (splitting files into chunks)", "Metadata DB sharding & replication", "Notification service for client sync", "Conflict resolution (revision history)"]
  },
  {
    id: "hld-q-proximity",
    tab: "hld-questions",
    chapter: "Chapter 17",
    title: "Proximity Service",
    page: 1,
    originalPage: 267,
    pdfPath: "HLD/html/chapter_17.html",
    difficulty: "medium",
    focus: ["Geohash representation", "Quadtree index (in-memory tree)", "Google S2 geometry", "Read/Write path for business updates", "Caching search results"]
  },
  {
    id: "hld-q-nearbyfriends",
    tab: "hld-questions",
    chapter: "Chapter 18",
    title: "Nearby Friends",
    page: 1,
    originalPage: 305,
    pdfPath: "HLD/html/chapter_18.html",
    difficulty: "hard",
    focus: ["WebSocket connections", "Pub/Sub channel per user (Redis Pub/Sub)", "Geohash proximity grid", "Stateful location cache", "Scale connection managers"]
  },
  {
    id: "hld-q-gmaps",
    tab: "hld-questions",
    chapter: "Chapter 19",
    title: "Google Maps",
    page: 1,
    originalPage: 333,
    pdfPath: "HLD/html/chapter_19.html",
    difficulty: "hard",
    focus: ["Map rendering & Vector tiles", "Routing service (Dijkstra/A* on road segments)", "Routing tile DB representation", "Traffic service & Kafka streaming updates"]
  },
  {
    id: "hld-q-messagequeue",
    tab: "hld-questions",
    chapter: "Chapter 20",
    title: "Distributed Message Queue",
    page: 1,
    originalPage: 373,
    pdfPath: "HLD/html/chapter_20.html",
    difficulty: "hard",
    focus: ["Broker architecture (Producer, Broker, Consumer)", "Topic, partitions & offsets", "Persistent storage (append-only commit log)", "Push vs Pull consumer models", "Replication & ZooKeeper coordinating"]
  },
  {
    id: "hld-q-metrics",
    tab: "hld-questions",
    chapter: "Chapter 21",
    title: "Metrics Monitoring and Alerting System",
    page: 1,
    originalPage: 414,
    pdfPath: "HLD/html/chapter_21.html",
    difficulty: "hard",
    focus: ["Data collection pipeline (Pull vs Push)", "Time-series database selection (InfluxDB, Prometheus)", "Query service & caching", "Rules engine & Alerting router"]
  },
  {
    id: "hld-q-adclick",
    tab: "hld-questions",
    chapter: "Chapter 22",
    title: "Ad Click Event Aggregation",
    page: 1,
    originalPage: 443,
    pdfPath: "HLD/html/chapter_22.html",
    difficulty: "hard",
    focus: ["Data ingestion layer (Kafka)", "Stream processing engine (Flink, Spark)", "Time windowing types (Tumbling vs Sliding)", "Exactly-once semantics", "Cold storage (HDFS/S3)"]
  },
  {
    id: "hld-q-hotel",
    tab: "hld-questions",
    chapter: "Chapter 23",
    title: "Hotel Reservation System",
    page: 1,
    originalPage: 481,
    pdfPath: "HLD/html/chapter_23.html",
    difficulty: "hard",
    focus: ["Database schema for inventory (optimizing queries)", "Concurrency control (Pessimistic vs Optimistic locking)", "Double-booking prevention", "Idempotency keys for payment validation"]
  },
  {
    id: "hld-q-email",
    tab: "hld-questions",
    chapter: "Chapter 24",
    title: "Distributed Email Service",
    page: 1,
    originalPage: 514,
    pdfPath: "HLD/html/chapter_24.html",
    difficulty: "hard",
    focus: ["SMTP, POP3, IMAP protocols", "Mailbox storage engine (NoSQL vs Custom Log DB)", "Search indexing pipeline (Elasticsearch)", "Spam filter integration", "Large attachment handlers"]
  },
  {
    id: "hld-q-s3",
    tab: "hld-questions",
    chapter: "Chapter 25",
    title: "S3-like Object Storage",
    page: 1,
    originalPage: 545,
    pdfPath: "HLD/html/chapter_25.html",
    difficulty: "hard",
    focus: ["Metadata service vs Data service", "Object storage vs Block storage", "Consistent hashing for bucket/key mapping", "Data replication (Erasure Coding vs Replica)", "Garbage collection"]
  },
  {
    id: "hld-q-leaderboard",
    tab: "hld-questions",
    chapter: "Chapter 26",
    title: "Real-time Gaming Leaderboard",
    page: 1,
    originalPage: 585,
    pdfPath: "HLD/html/chapter_26.html",
    difficulty: "medium",
    focus: ["Redis Sorted Sets (ZADD, ZINCRBY, ZREVRANGE)", "Alternative: Relational DB with indexes vs NoSQL", "Message queues for ingestion", "Caching leaderboard segments"]
  },
  {
    id: "hld-q-payments",
    tab: "hld-questions",
    chapter: "Chapter 27",
    title: "Payment System",
    page: 1,
    originalPage: 612,
    pdfPath: "HLD/html/chapter_27.html",
    difficulty: "hard",
    focus: ["Payment flow: Ledger, Wallet, Payment Executor", "Reconciliation engine (balancing accounts)", "Idempotent payment processing", "Handling network timeouts gracefully"]
  },
  {
    id: "hld-q-wallet",
    tab: "hld-questions",
    chapter: "Chapter 28",
    title: "Digital Wallet",
    page: 1,
    originalPage: 640,
    pdfPath: "HLD/html/chapter_28.html",
    difficulty: "hard",
    focus: ["Transaction model (double-entry accounting)", "Distributed transactions (2-Phase Commit, Saga pattern)", "Optimistic concurrency locking", "Database isolation levels (Serializable)"]
  },
  {
    id: "hld-q-stockexchange",
    tab: "hld-questions",
    chapter: "Chapter 29",
    title: "Stock Exchange",
    page: 1,
    originalPage: 681,
    pdfPath: "HLD/html/chapter_29.html",
    difficulty: "hard",
    focus: ["Order matching engine (FIFO / LOB)", "Order manager & Execution report generator", "High-frequency low-latency networking", "In-memory state management & journaling"]
  }
];

// 2. Application State
const appState = {
  activeTab: "lld-basics", // default tab
  searchQuery: "",
  statusFilter: "all",
  difficultyFilter: "all",
  showStarredOnly: false
};

// 3. LocalStorage persistence helpers
const STORAGE_KEY = "designmaster_user_progress";

function loadUserProgress() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error("Failed to parse stored progress", e);
    }
  }
  
  // Default progress structure
  const progress = {};
  topicsData.forEach(topic => {
    progress[topic.id] = {
      status: "not-started",
      starred: false,
      notes: "",
      lastStudied: null
    };
  });
  return progress;
}

let userProgress = loadUserProgress();

function saveUserProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(userProgress));
  updateDashboard();
  updateSidebarBadges();
}

// 4. Toast notification system
function showToast(message, type = "success") {
  // Remove existing toast if present
  const existing = document.getElementById("app-toast");
  if (existing) {
    existing.remove();
  }

  const toast = document.createElement("div");
  toast.id = "app-toast";
  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.left = "50%";
  toast.style.transform = "translateX(-50%) translateY(100px)";
  toast.style.background = type === "success" 
    ? "rgba(16, 185, 129, 0.9)" 
    : type === "danger" 
      ? "rgba(239, 68, 68, 0.9)" 
      : "rgba(99, 102, 241, 0.9)";
  toast.style.color = "#fff";
  toast.style.padding = "0.75rem 1.5rem";
  toast.style.borderRadius = "8px";
  toast.style.fontFamily = "var(--font-heading)";
  toast.style.fontSize = "0.85rem";
  toast.style.fontWeight = "600";
  toast.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
  toast.style.zIndex = "1000";
  toast.style.transition = "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
  toast.style.backdropFilter = "blur(4px)";
  toast.textContent = message;

  document.body.appendChild(toast);

  // Force reflow and animate in
  setTimeout(() => {
    toast.style.transform = "translateX(-50%) translateY(0)";
  }, 50);

  // Animate out and remove
  setTimeout(() => {
    toast.style.transform = "translateX(-50%) translateY(100px)";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2500);
}

// 5. Dashboard computation
function updateDashboard() {
  const total = topicsData.length;
  let completed = 0;
  let inProgress = 0;
  let revision = 0;

  topicsData.forEach(topic => {
    const prog = userProgress[topic.id];
    if (prog.status === "completed") completed++;
    else if (prog.status === "in-progress") inProgress++;
    else if (prog.status === "revision") revision++;
  });

  // Calculate percentage
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  // Update DOM values
  document.getElementById("stat-total-val").textContent = total;
  document.getElementById("stat-completed-val").textContent = completed;
  document.getElementById("stat-progress-val").textContent = inProgress;
  document.getElementById("stat-revision-val").textContent = revision;

  // Update progress bars
  document.getElementById("global-progress-txt").textContent = `${percent}%`;
  document.getElementById("global-progress-fill").style.width = `${percent}%`;
}

// Update badges on the left sidebar
function updateSidebarBadges() {
  const tabs = ["lld-basics", "lld-questions", "hld-basics", "hld-questions"];
  
  tabs.forEach(tabId => {
    const tabTopics = topicsData.filter(t => t.tab === tabId);
    const completedCount = tabTopics.filter(t => userProgress[t.id].status === "completed").length;
    const badge = document.querySelector(`.tab-btn[data-tab="${tabId}"] .tab-badge`);
    if (badge) {
      badge.textContent = `${completedCount}/${tabTopics.length}`;
    }
  });
}

// 6. Topic List Rendering
function renderTopics() {
  const container = document.getElementById("topics-container");
  container.innerHTML = "";

  // Filter topics
  const filtered = topicsData.filter(topic => {
    // 1. Tab filter
    if (topic.tab !== appState.activeTab) return false;

    // 2. Search filter
    if (appState.searchQuery) {
      const q = appState.searchQuery.toLowerCase();
      const titleMatch = topic.title.toLowerCase().includes(q);
      const chapterMatch = topic.chapter.toLowerCase().includes(q);
      const focusMatch = topic.focus.some(f => f.toLowerCase().includes(q));
      if (!titleMatch && !chapterMatch && !focusMatch) return false;
    }

    // 3. Status filter
    const prog = userProgress[topic.id];
    if (appState.statusFilter !== "all" && prog.status !== appState.statusFilter) return false;

    // 4. Difficulty filter
    if (appState.difficultyFilter !== "all" && topic.difficulty !== appState.difficultyFilter) return false;

    // 5. Star filter
    if (appState.showStarredOnly && !prog.starred) return false;

    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🔍</div>
        <div class="empty-state-title">No topics found</div>
        <p>Try refining your search queries or filter selections</p>
      </div>
    `;
    return;
  }

  filtered.forEach(topic => {
    const prog = userProgress[topic.id];
    const isStarred = prog.starred;

    const row = document.createElement("div");
    row.className = "topic-row";
    row.setAttribute("data-type", topic.tab);
    row.setAttribute("data-id", topic.id);

    // Create focus bullets markup
    const focusBullets = topic.focus.map(f => `<span class="focus-bullet">${f}</span>`).join("");

    row.innerHTML = `
      <div class="topic-main-info">
        <button class="star-btn ${isStarred ? 'starred' : ''}" title="Star Topic" onclick="toggleStar('${topic.id}', event)">
          ★
        </button>
        <div class="topic-details">
          <div class="topic-chapter-num">${topic.chapter} • Book Page ${topic.originalPage}</div>
          <div class="topic-title">${topic.title}</div>
          <div class="topic-focus">${focusBullets}</div>
        </div>
      </div>
      <div class="topic-metadata-pills">
        <span class="difficulty-badge ${topic.difficulty}">${topic.difficulty}</span>
        
        <div class="status-select-wrapper">
          <select 
            class="status-dropdown" 
            data-status="${prog.status}" 
            onchange="changeStatus('${topic.id}', this.value)"
          >
            <option value="not-started" ${prog.status === 'not-started' ? 'selected' : ''}>Not Started</option>
            <option value="in-progress" ${prog.status === 'in-progress' ? 'selected' : ''}>In Progress</option>
            <option value="completed" ${prog.status === 'completed' ? 'selected' : ''}>Completed</option>
            <option value="revision" ${prog.status === 'revision' ? 'selected' : ''}>Needs Revision</option>
          </select>
        </div>

        <div class="row-actions">
          <button class="action-btn read-btn" data-type="${topic.tab}" onclick="readPDF('${topic.pdfPath}', ${topic.page}, '${topic.title}', '${topic.id}')" title="Read Chapter">
            📖 Read
          </button>
        </div>
      </div>
    `;

    row.addEventListener("click", (e) => {
      if (e.target.closest("button") || e.target.closest("select")) {
        return;
      }
      readPDF(topic.pdfPath, topic.page, topic.title, topic.id);
    });

    container.appendChild(row);
  });
}

// 7. Event Handlers & State Mutations
window.toggleStar = function(topicId, event) {
  if (event) event.stopPropagation();
  userProgress[topicId].starred = !userProgress[topicId].starred;
  saveUserProgress();
  
  // Re-render list
  renderTopics();
  
  const stateStr = userProgress[topicId].starred ? "starred" : "unstarred";
  showToast(`Topic ${stateStr} successfully`, "info");
};

window.changeStatus = function(topicId, newStatus) {
  const oldStatus = userProgress[topicId].status;
  userProgress[topicId].status = newStatus;
  
  // Update timestamp if completed
  if (newStatus === "completed" && oldStatus !== "completed") {
    userProgress[topicId].lastStudied = new Date().toISOString();
  }
  
  saveUserProgress();
  
  // Update dropdown class dynamically for color change
  const select = document.querySelector(`[data-id="${topicId}"] .status-dropdown`);
  if (select) {
    select.setAttribute("data-status", newStatus);
  }
  
  // If starredOnly or status filter is on, re-rendering is needed
  if (appState.statusFilter !== "all") {
    renderTopics();
  } else {
    // If not full re-render, we still want dashboard and sidebar updated
    updateDashboard();
    updateSidebarBadges();
  }

  showToast(`Status updated to ${newStatus.replace('-', ' ')}`, "success");
};

// --- Notes System ---
// Notes feature removed for UI simplicity

// --- HTML Chapter Reader ---
window.readPDF = function(htmlPath, pageNum, title, topicId) {
  // Automatically switch status to "In Progress" if "Not Started"
  if (userProgress[topicId].status === "not-started") {
    changeStatus(topicId, "in-progress");
  }

  // Open the HTML file in a new tab
  const win = window.open(htmlPath, '_blank');
  if (win) {
    win.focus();
  } else {
    showToast("Popup blocked! Please allow popups for this site.", "danger");
  }
};

// --- Reset operations ---
window.resetAllProgress = function() {
  if (confirm("🚨 WARNING: This will permanently reset all your study status and stars. Are you sure you want to proceed?")) {
    localStorage.removeItem(STORAGE_KEY);
    userProgress = loadUserProgress();
    saveUserProgress();
    renderTopics();
    showToast("All progress reset to default", "danger");
  }
};

// 8. Initialization & Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Sidebar tab button triggers
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const tabId = btn.getAttribute("data-tab");
      appState.activeTab = tabId;
      
      // Reset page headers and subtext based on tab
      const headerTitle = document.getElementById("page-header-title");
      const headerSubtitle = document.getElementById("page-header-subtitle");
      
      if (tabId === "lld-basics") {
        headerTitle.textContent = "LLD Basics";
        headerSubtitle.textContent = "Foundational object-oriented design patterns, principles, and guidelines.";
      } else if (tabId === "lld-questions") {
        headerTitle.textContent = "LLD Questions";
        headerSubtitle.textContent = "Practical OOD case studies and system implementation questions.";
      } else if (tabId === "hld-basics") {
        headerTitle.textContent = "HLD Basics";
        headerSubtitle.textContent = "Core system design concepts, back-of-the-envelope maths, and architectures.";
      } else if (tabId === "hld-questions") {
        headerTitle.textContent = "HLD Questions";
        headerSubtitle.textContent = "Scalable distributed system case studies and end-to-end designs.";
      }

      renderTopics();
    });
  });

  // Search input event listener (with debounce)
  const searchInput = document.getElementById("search-input");
  let searchTimeout = null;
  searchInput.addEventListener("input", (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      appState.searchQuery = e.target.value;
      renderTopics();
    }, 200);
  });

  // Status Filter change
  document.getElementById("status-filter").addEventListener("change", (e) => {
    appState.statusFilter = e.target.value;
    renderTopics();
  });

  // Difficulty Filter change
  document.getElementById("difficulty-filter").addEventListener("change", (e) => {
    appState.difficultyFilter = e.target.value;
    renderTopics();
  });

  // Starred button toggler
  const starredToggleBtn = document.getElementById("starred-toggle-btn");
  starredToggleBtn.addEventListener("click", () => {
    appState.showStarredOnly = !appState.showStarredOnly;
    if (appState.showStarredOnly) {
      starredToggleBtn.classList.add("active");
      starredToggleBtn.style.color = "#eab308";
      starredToggleBtn.style.background = "rgba(234, 179, 8, 0.08)";
      starredToggleBtn.style.borderColor = "rgba(234, 179, 8, 0.3)";
    } else {
      starredToggleBtn.classList.remove("active");
      starredToggleBtn.style.color = "var(--text-secondary)";
      starredToggleBtn.style.background = "rgba(255, 255, 255, 0.04)";
      starredToggleBtn.style.borderColor = "var(--border-glass)";
    }
    renderTopics();
  });

  // Drawer overlays clicking should close open drawers
  // Overlay logic removed

  // Setup dashboard metrics
  updateDashboard();
  updateSidebarBadges();
  
  // Initial render
  renderTopics();
});
