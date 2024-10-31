const imageUrl =
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop";

const products = [
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    imageSrc: imageUrl,
    description:
      "Premium over-ear headphones with active noise cancellation and 30-hour battery life",
    price: 299.99,
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    imageSrc: imageUrl,
    description:
      "Track your health metrics and workout progress with this water-resistant smart watch",
    price: 199.99,
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    imageSrc: imageUrl,
    description:
      "Adjustable lumbar support and breathable mesh back for all-day comfort",
    price: 349.99,
  },
  {
    id: 4,
    name: "4K Ultra HD Monitor",
    imageSrc: imageUrl,
    description: "27-inch display with HDR support and built-in speakers",
    price: 449.99,
  },
  {
    id: 5,
    name: "Mechanical Gaming Keyboard",
    imageSrc: imageUrl,
    description:
      "RGB backlit keys with Cherry MX switches for precise tactile feedback",
    price: 129.99,
  },
  {
    id: 6,
    name: "Wireless Gaming Mouse",
    imageSrc: imageUrl,
    description:
      "16000 DPI optical sensor with customizable buttons and RGB lighting",
    price: 79.99,
  },
  {
    id: 7,
    name: "Portable Power Bank",
    imageSrc: imageUrl,
    description:
      "20000mAh capacity with fast charging support for multiple devices",
    price: 49.99,
  },
  {
    id: 8,
    name: "Smart Home Security Camera",
    imageSrc: imageUrl,
    description:
      "1080p HD video with night vision and two-way audio communication",
    price: 159.99,
  },
  {
    id: 9,
    name: "Robot Vacuum Cleaner",
    imageSrc: imageUrl,
    description: "Smart navigation with app control and automatic charging",
    price: 299.99,
  },
  {
    id: 10,
    name: "Air Purifier",
    imageSrc: imageUrl,
    description:
      "HEPA filter removes 99.97% of airborne particles with quiet operation",
    price: 199.99,
  },
  {
    id: 11,
    name: "Coffee Maker",
    imageSrc: imageUrl,
    description:
      "Programmable brewing with thermal carafe and built-in grinder",
    price: 179.99,
  },
  {
    id: 12,
    name: "Blender",
    imageSrc: imageUrl,
    description: "1000W motor with variable speeds and pulse function",
    price: 89.99,
  },
  {
    id: 13,
    name: "Toaster Oven",
    imageSrc: imageUrl,
    description:
      "6-slice capacity with multiple cooking functions and digital controls",
    price: 129.99,
  },
  {
    id: 14,
    name: "Stand Mixer",
    imageSrc: imageUrl,
    description: "5-quart bowl with planetary mixing action and 10 speeds",
    price: 279.99,
  },
  {
    id: 15,
    name: "Food Processor",
    imageSrc: imageUrl,
    description:
      "8-cup capacity with multiple attachments for versatile food prep",
    price: 149.99,
  },
  {
    id: 16,
    name: "Smart Thermostat",
    imageSrc: imageUrl,
    description:
      "WiFi-enabled with learning capability and energy savings tracking",
    price: 249.99,
  },
  {
    id: 17,
    name: "LED Smart Bulbs (4-pack)",
    imageSrc: imageUrl,
    description: "Color-changing bulbs with voice control compatibility",
    price: 59.99,
  },
  {
    id: 18,
    name: "Wireless Doorbell",
    imageSrc: imageUrl,
    description: "HD video with two-way talk and motion detection",
    price: 169.99,
  },
  {
    id: 19,
    name: "Smart Door Lock",
    imageSrc: imageUrl,
    description: "Fingerprint and code entry with smartphone control",
    price: 229.99,
  },
  {
    id: 20,
    name: "Mesh WiFi System",
    imageSrc: imageUrl,
    description: "Whole-home coverage with easy setup and parental controls",
    price: 299.99,
  },
  {
    id: 21,
    name: "Portable Bluetooth Speaker",
    imageSrc: imageUrl,
    description: "Waterproof design with 20-hour battery life and rich sound",
    price: 129.99,
  },
  {
    id: 22,
    name: "Soundbar",
    imageSrc: imageUrl,
    description: "2.1 channel with wireless subwoofer and Bluetooth streaming",
    price: 199.99,
  },
  {
    id: 23,
    name: "Wireless Charging Pad",
    imageSrc: imageUrl,
    description: "Fast charging compatible with Qi-enabled devices",
    price: 39.99,
  },
  {
    id: 24,
    name: "USB-C Hub",
    imageSrc: imageUrl,
    description: "7-in-1 adapter with 4K HDMI and power delivery",
    price: 49.99,
  },
  {
    id: 25,
    name: "External SSD",
    imageSrc: imageUrl,
    description: "1TB capacity with USB 3.2 interface for fast data transfer",
    price: 149.99,
  },
  {
    id: 26,
    name: "Webcam",
    imageSrc: imageUrl,
    description: "1080p HD video with built-in microphone and auto focus",
    price: 79.99,
  },
  {
    id: 27,
    name: "Digital Drawing Tablet",
    imageSrc: imageUrl,
    description: "10-inch active area with 8192 pressure levels",
    price: 199.99,
  },
  {
    id: 28,
    name: "Smart Scale",
    imageSrc: imageUrl,
    description: "Measures weight, body fat, and other metrics with app sync",
    price: 69.99,
  },
  {
    id: 29,
    name: "Electric Toothbrush",
    imageSrc: imageUrl,
    description: "Sonic cleaning with multiple modes and pressure sensor",
    price: 89.99,
  },
  {
    id: 30,
    name: "Hair Dryer",
    imageSrc: imageUrl,
    description:
      "Professional-grade with ionic technology and multiple heat settings",
    price: 159.99,
  },
  {
    id: 31,
    name: "Electric Razor",
    imageSrc: imageUrl,
    description: "Wet/dry operation with precision trimmer and quick charge",
    price: 119.99,
  },
  {
    id: 32,
    name: "Smart Mirror",
    imageSrc: imageUrl,
    description: "LED-illuminated with weather display and Bluetooth speaker",
    price: 199.99,
  },
  {
    id: 33,
    name: "Desktop Computer",
    imageSrc: imageUrl,
    description: "Intel i7, 32GB RAM, 1TB SSD, RTX 3070 graphics",
    price: 1499.99,
  },
  {
    id: 34,
    name: "Gaming Laptop",
    imageSrc: imageUrl,
    description: "15.6-inch 144Hz display, RTX 3060, 16GB RAM",
    price: 1299.99,
  },
  {
    id: 35,
    name: "Tablet",
    imageSrc: imageUrl,
    description: "10.9-inch Retina display, 256GB storage, WiFi + Cellular",
    price: 799.99,
  },
  {
    id: 36,
    name: "Smartphone",
    imageSrc: imageUrl,
    description: "6.7-inch OLED, 5G, 256GB storage, triple camera system",
    price: 999.99,
  },
  {
    id: 37,
    name: "Wireless Earbuds",
    imageSrc: imageUrl,
    description: "Active noise cancellation, water resistant, 24-hour battery",
    price: 149.99,
  },
  {
    id: 38,
    name: "Smart TV",
    imageSrc: imageUrl,
    description: "65-inch 4K OLED with HDR and smart platform integration",
    price: 1799.99,
  },
  {
    id: 39,
    name: "Gaming Console",
    imageSrc: imageUrl,
    description: "4K gaming, 1TB SSD, includes wireless controller",
    price: 499.99,
  },
  {
    id: 40,
    name: "Digital Camera",
    imageSrc: imageUrl,
    description: "24.2MP mirrorless with 4K video and flip screen",
    price: 899.99,
  },
  {
    id: 41,
    name: "VR Headset",
    imageSrc: imageUrl,
    description: "High-resolution displays with motion controllers",
    price: 399.99,
  },
];

export default products;
