"use client"

// Real-time chat API with localStorage (can be easily replaced with real backend)
export interface Message {
  id: string
  text: string
  sender: "user" | "admin"
  timestamp: Date
  userId: string
  read: boolean
}

export interface ChatUser {
  id: string
  name: string
  mobile: string
  email?: string
  isOnline: boolean
  lastSeen: Date
  unreadCount: number
  avatar?: string
}

export interface ChatSession {
  userId: string
  messages: Message[]
  user: ChatUser
}

class ChatAPI {
  private storageKey = "harshal_chat_system"
  private listeners: ((data: any) => void)[] = []
  private onlineUsers: Set<string> = new Set()

  // Initialize with some demo data
  private initializeData() {
    const existingData = this.getData()
    if (existingData.users.length === 0) {
      const demoData = {
        users: [
          {
            id: "demo_user_1",
            name: "Rahul Sharma",
            mobile: "+91 9876543210",
            email: "rahul@example.com",
            isOnline: false,
            lastSeen: new Date(Date.now() - 300000), // 5 minutes ago
            unreadCount: 2,
          },
          {
            id: "demo_user_2",
            name: "Priya Patel",
            mobile: "+91 8765432109",
            email: "priya@example.com",
            isOnline: false,
            lastSeen: new Date(Date.now() - 600000), // 10 minutes ago
            unreadCount: 0,
          },
        ],
        messages: {
          demo_user_1: [
            {
              id: "msg_1",
              text: "Hi Harshal! I need a website for my business. Can you help?",
              sender: "user",
              timestamp: new Date(Date.now() - 900000),
              userId: "demo_user_1",
              read: false,
            },
            {
              id: "msg_2",
              text: "I'd be happy to help. What kind of business do you have?",
              sender: "admin",
              timestamp: new Date(Date.now() - 600000),
              userId: "demo_user_1",
              read: true,
            },
            {
              id: "msg_3",
              text: "It's a restaurant. I need online ordering and table booking features.",
              sender: "user",
              timestamp: new Date(Date.now() - 300000),
              userId: "demo_user_1",
              read: false,
            },
          ],
          demo_user_2: [
            {
              id: "msg_4",
              text: "Hello! I saw your portfolio. Very impressive work!",
              sender: "user",
              timestamp: new Date(Date.now() - 1200000),
              userId: "demo_user_2",
              read: true,
            },
            {
              id: "msg_5",
              text: "Thank you! I appreciate your kind words. How can I help you?",
              sender: "admin",
              timestamp: new Date(Date.now() - 900000),
              userId: "demo_user_2",
              read: true,
            },
          ],
        },
      }
      this.saveData(demoData)
    }
  }

  constructor() {
    if (typeof window !== "undefined") {
      this.initializeData()
    }
  }

  // Get all data from localStorage
  private getData() {
    if (typeof window === "undefined") return { users: [], messages: {} }

    try {
      const data = localStorage.getItem(this.storageKey)
      const parsedData = data ? JSON.parse(data) : { users: [], messages: {} }

      // Ensure proper structure
      return {
        users: parsedData.users || [],
        messages: parsedData.messages || {},
      }
    } catch (error) {
      console.error("Error parsing chat data:", error)
      return { users: [], messages: {} }
    }
  }

  // Save data to localStorage
  private saveData(data: any) {
    if (typeof window === "undefined") return
    localStorage.setItem(this.storageKey, JSON.stringify(data))
    this.notifyListeners(data)
  }

  // Add listener for real-time updates
  addListener(callback: (data: any) => void) {
    this.listeners.push(callback)
  }

  // Remove listener
  removeListener(callback: (data: any) => void) {
    this.listeners = this.listeners.filter((l) => l !== callback)
  }

  // Notify all listeners
  private notifyListeners(data: any) {
    this.listeners.forEach((callback) => callback(data))
  }

  // Register new user
  async registerUser(userData: { name: string; mobile: string; email?: string }): Promise<ChatUser> {
    const data = this.getData()
    const userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

    const newUser: ChatUser = {
      id: userId,
      name: userData.name,
      mobile: userData.mobile,
      email: userData.email,
      isOnline: true,
      lastSeen: new Date(),
      unreadCount: 0,
    }

    // Ensure users array exists
    if (!data.users) {
      data.users = []
    }

    // Ensure messages object exists
    if (!data.messages) {
      data.messages = {}
    }

    data.users.push(newUser)
    data.messages[userId] = []

    // Add welcome message from admin
    const welcomeMessage: Message = {
      id: `welcome_${userId}_${Date.now()}`,
      text: `Hi ${userData.name}! Welcome to my portfolio chat. I'm Harshal, and I'm excited to help you with your project. How can I assist you today?`,
      sender: "admin",
      timestamp: new Date(),
      userId: userId,
      read: false,
    }

    data.messages[userId].push(welcomeMessage)
    this.onlineUsers.add(userId)
    this.saveData(data)

    return newUser
  }

  // Get all users (for admin)
  async getUsers(): Promise<ChatUser[]> {
    const data = this.getData()
    return (data.users || []).map((user: ChatUser) => ({
      ...user,
      isOnline: this.onlineUsers.has(user.id),
    }))
  }

  // Get messages for a user
  async getMessages(userId: string): Promise<Message[]> {
    const data = this.getData()
    return data.messages[userId] || []
  }

  // Send message
  async sendMessage(userId: string, text: string, sender: "user" | "admin"): Promise<Message> {
    const data = this.getData()

    const message: Message = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      text: text.trim(),
      sender,
      timestamp: new Date(),
      userId,
      read: false,
    }

    // Ensure messages object and user messages array exist
    if (!data.messages) {
      data.messages = {}
    }

    if (!data.messages[userId]) {
      data.messages[userId] = []
    }

    data.messages[userId].push(message)

    // Update user's unread count and online status
    if (!data.users) {
      data.users = []
    }

    const userIndex = data.users.findIndex((u: ChatUser) => u.id === userId)
    if (userIndex !== -1) {
      if (sender === "user") {
        data.users[userIndex].unreadCount = (data.users[userIndex].unreadCount || 0) + 1
      }
      data.users[userIndex].lastSeen = new Date()
      data.users[userIndex].isOnline = this.onlineUsers.has(userId)
    }

    this.saveData(data)
    return message
  }

  // Mark messages as read
  async markAsRead(userId: string, isAdmin = false): Promise<void> {
    const data = this.getData()

    if (data.messages[userId]) {
      data.messages[userId] = data.messages[userId].map((msg: Message) => ({
        ...msg,
        read: true,
      }))
    }

    // Reset unread count for admin
    if (isAdmin) {
      const userIndex = data.users.findIndex((u: ChatUser) => u.id === userId)
      if (userIndex !== -1) {
        data.users[userIndex].unreadCount = 0
      }
    }

    this.saveData(data)
  }

  // Update user online status
  async updateUserStatus(userId: string, isOnline: boolean): Promise<void> {
    if (isOnline) {
      this.onlineUsers.add(userId)
    } else {
      this.onlineUsers.delete(userId)
    }

    const data = this.getData()
    const userIndex = data.users.findIndex((u: ChatUser) => u.id === userId)

    if (userIndex !== -1) {
      data.users[userIndex].isOnline = isOnline
      data.users[userIndex].lastSeen = new Date()
      this.saveData(data)
    }
  }

  // Get user by ID
  async getUser(userId: string): Promise<ChatUser | null> {
    const data = this.getData()
    const user = data.users.find((u: ChatUser) => u.id === userId)
    if (user) {
      return {
        ...user,
        isOnline: this.onlineUsers.has(userId),
      }
    }
    return null
  }

  // Delete user and all messages
  async deleteUser(userId: string): Promise<void> {
    const data = this.getData()
    data.users = data.users.filter((u: ChatUser) => u.id !== userId)
    delete data.messages[userId]
    this.onlineUsers.delete(userId)
    this.saveData(data)
  }

  // Get chat statistics
  async getStats(): Promise<{
    totalUsers: number
    totalMessages: number
    onlineUsers: number
    unreadMessages: number
  }> {
    const data = this.getData()
    const users = data.users || []
    const messages = data.messages || {}

    const totalMessages = Object.values(messages).reduce((total: number, userMessages: any) => {
      return total + (userMessages?.length || 0)
    }, 0)

    const unreadMessages = users.reduce((total: number, user: ChatUser) => {
      return total + (user.unreadCount || 0)
    }, 0)

    return {
      totalUsers: users.length,
      totalMessages,
      onlineUsers: this.onlineUsers.size,
      unreadMessages,
    }
  }

  // Clear all data (for testing)
  async clearAllData(): Promise<void> {
    if (typeof window !== "undefined") {
      localStorage.removeItem(this.storageKey)
      this.onlineUsers.clear()
      this.notifyListeners({ users: [], messages: {} })
    }
  }

  // Search messages
  async searchMessages(query: string, userId?: string): Promise<Message[]> {
    const data = this.getData()
    const messages = data.messages || {}
    const results: Message[] = []

    const searchIn = userId ? [userId] : Object.keys(messages)

    searchIn.forEach((uid) => {
      const userMessages = messages[uid] || []
      userMessages.forEach((msg: Message) => {
        if (msg.text.toLowerCase().includes(query.toLowerCase())) {
          results.push(msg)
        }
      })
    })

    return results.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
  }
}

export const chatAPI = new ChatAPI()
