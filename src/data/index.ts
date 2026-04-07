import { v4 as uuid } from "uuid";
import type { Iproduct } from "../interfaces";

export const productsList: Iproduct[] = [
  {
    id: uuid(),
    title: "Wireless Headphones",
    description:
      "These wireless headphones deliver exceptional audio clarity with advanced noise cancellation, making them perfect for music lovers and professionals. The lightweight design ensures comfort during long listening sessions, while the extended battery life supports hours of uninterrupted use. With sleek aesthetics and durable build quality, they are ideal for daily commuting, studying, or working remotely.",
    imageURL:
      "https://images.unsplash.com/photo-1491927570842-0261e477d937?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "120",
    colors: ["black", "white", "blue"],
    category: {
      name: "Electronics",
      imageURL:
        "https://images.unsplash.com/photo-1491927570842-0261e477d937?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "Luxury Wireless Headphones",
    description:
      "Crafted with premium materials and diamond accents, these luxury headphones redefine exclusivity and style. They combine superior audio performance with unmatched elegance, offering collectors and audiophiles a product that is both functional and prestigious. The gold finish and limited-edition design make them a statement piece, blending technology with luxury in a way few products achieve.",
    imageURL:
      "https://images.unsplash.com/photo-1659471256108-2abfe4c901ea?q=80&w=714&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "150000",
    colors: ["gold", "black"],
    category: {
      name: "Electronics",
      imageURL:
        "https://images.unsplash.com/photo-1659471256108-2abfe4c901ea?q=80&w=714&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "Running Shoes",
    description:
      "Designed for athletes and fitness enthusiasts, these running shoes provide lightweight comfort, durability, and superior traction. The breathable fabric keeps your feet cool during long runs, while the cushioned sole reduces impact for safer training. Perfect for daily exercise, they balance performance and affordability, making them a reliable choice for beginners and professionals alike.",
    imageURL:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "80",
    colors: ["red", "black"],
    category: {
      name: "Sportswear",
      imageURL:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "Electric Sports Car",
    description:
      "This electric sports car represents the pinnacle of innovation, combining breathtaking speed with sustainable engineering. Featuring a luxurious interior crafted from premium materials, advanced autonomous driving capabilities, and a powerful battery system, it delivers unmatched performance. Its aerodynamic design and exclusivity make it more than transportation—it is a symbol of prestige, innovation, and futuristic luxury worth half a million.",
    imageURL:
      "https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "500000",
    colors: ["white", "gold", "black"],
    category: {
      name: "Automotive",
      imageURL:
        "https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "Smart Watch",
    description:
      "This smartwatch offers a perfect blend of style and functionality, enabling users to track fitness, monitor health, and stay connected. With a sleek design and intuitive interface, it supports notifications, heart rate monitoring, and activity tracking. Built for modern lifestyles, it is ideal for professionals, athletes, and anyone seeking convenience and technology on their wrist.",
    imageURL:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "200",
    colors: ["silver", "black"],
    category: {
      name: "Electronics",
      imageURL:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "Luxury Smart Watch",
    description:
      "Combining advanced technology with timeless elegance, this luxury smartwatch features sapphire glass, a gold casing, and exclusive design. It offers comprehensive health tracking, smart notifications, and premium craftsmanship. Tailored for discerning customers, it is not just a device but a statement of prestige, blending innovation with luxury for those who demand the very best.",
    imageURL:
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "120000",
    colors: ["gold", "black"],
    category: {
      name: "Electronics",
      imageURL:
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "AirPods",
    description:
      "Compact and stylish, these wireless earbuds deliver crystal-clear sound and seamless connectivity. Designed for everyday use, they offer reliable performance, quick pairing, and long battery life. Perfect for music lovers, professionals, and students, they combine convenience with quality, making them an essential accessory for modern living and productivity.",
    imageURL:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=1589&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "250",
    colors: ["white"],
    category: {
      name: "Accessories",
      imageURL:
        "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=1589&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "Diamond AirPods",
    description:
      "These exclusive AirPods are adorned with diamonds, transforming a functional device into a luxury accessory. They deliver superior audio quality while showcasing unmatched elegance and prestige. Designed for elite customers, they combine cutting-edge technology with opulence, making them a rare product that symbolizes status, exclusivity, and refined taste.",
    imageURL:
      "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "300000",
    colors: ["white", "silver"],
    category: {
      name: "Accessories",
      imageURL:
        "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "Gaming Laptop",
    description:
      "Built for gamers and creators, this high-performance laptop features RTX graphics, a fast processor, and advanced cooling systems. Its immersive display ensures smooth gameplay and professional-grade content creation. With durable design and powerful hardware, it is perfect for those seeking reliability and performance in demanding environments, from competitive gaming to creative projects.",
    imageURL:
      "https://images.unsplash.com/photo-1640955014216-75201056c829?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "2500",
    colors: ["black", "red"],
    category: {
      name: "Computers",
      imageURL:
        "https://images.unsplash.com/photo-1640955014216-75201056c829?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuid(),
    title: "Ultra Luxury Gaming Laptop",
    description:
      "This collector’s edition gaming laptop redefines exclusivity with gold plating and powerful hardware. It combines cutting-edge performance with unmatched prestige, offering enthusiasts a product that is both functional and luxurious. Designed for collectors and professionals, it is more than a laptop—it is a symbol of status, innovation, and rare craftsmanship.",
    imageURL:
      "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "200000",
    colors: ["gold", "black"],
    category: {
      name: "Computers",
      imageURL:
        "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
];
