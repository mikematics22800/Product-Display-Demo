const products = [
  {
    title: "iPhone 15 Pro Max",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    price: { currentPrice: "$1,199.00" },
    details: "Latest iPhone with A17 Pro chip, titanium design, and advanced camera system"
  },
  {
    title: "Samsung Galaxy S24 Ultra",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
    price: { currentPrice: "$1,299.00" },
    details: "Premium Android flagship with S Pen, 200MP camera, and AI features"
  },
  {
    title: "MacBook Pro 16-inch",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    price: { currentPrice: "$2,499.00" },
    details: "Powerful laptop with M3 Pro chip, Liquid Retina XDR display"
  },
  {
    title: "Sony WH-1000XM5 Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    price: { currentPrice: "$399.99" },
    details: "Industry-leading noise cancellation with premium sound quality"
  },
  {
    title: "Nintendo Switch OLED",
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=400&fit=crop",
    price: { currentPrice: "$349.99" },
    details: "7-inch OLED screen, enhanced audio, and versatile gaming experience"
  },
  {
    title: "iPad Air 5th Gen",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    price: { currentPrice: "$599.00" },
    details: "M1 chip, 10.9-inch Liquid Retina display, all-day battery life"
  },
  {
    title: "DJI Mini 3 Pro Drone",
    image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=400&h=400&fit=crop",
    price: { currentPrice: "$759.00" },
    details: "Ultralight drone with 4K video, obstacle avoidance, and 34-minute flight time"
  },
  {
    title: "GoPro Hero 11 Black",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    price: { currentPrice: "$399.99" },
    details: "5.3K video, 27MP photos, HyperSmooth 5.0 stabilization"
  },
  {
    title: "Apple Watch Series 9",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca359?w=400&h=400&fit=crop",
    price: { currentPrice: "$399.00" },
    details: "S9 chip, Double Tap gesture, advanced health monitoring"
  },
  {
    title: "Samsung 65-inch QLED 4K TV",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
    price: { currentPrice: "$1,297.99" },
    details: "Quantum HDR, Object Tracking Sound, Gaming Hub"
  },
  {
    title: "PlayStation 5 Console",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop",
    price: { currentPrice: "$499.99" },
    details: "Next-gen gaming with ray tracing, 4K graphics, and ultra-fast SSD"
  },
  {
    title: "Xbox Series X",
    image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=400&h=400&fit=crop",
    price: { currentPrice: "$499.99" },
    details: "Most powerful Xbox ever with 4K gaming and Game Pass"
  },
  {
    title: "Canon EOS R6 Mark II",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
    price: { currentPrice: "$2,499.00" },
    details: "Full-frame mirrorless with 24.2MP, 4K video, and advanced AF"
  },
  {
    title: "Bose QuietComfort 45",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
    price: { currentPrice: "$329.00" },
    details: "Premium noise-canceling headphones with 24-hour battery life"
  },
  {
    title: "Dell XPS 13 Plus",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop",
    price: { currentPrice: "$1,299.00" },
    details: "13th Gen Intel Core, 13.4-inch OLED display, premium design"
  },
  {
    title: "Google Pixel 8 Pro",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    price: { currentPrice: "$999.00" },
    details: "Google Tensor G3, 50MP camera, Magic Eraser, 7 years of updates"
  },
  {
    title: "Microsoft Surface Laptop 5",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    price: { currentPrice: "$999.99" },
    details: "13.5-inch PixelSense display, Intel Core i5, all-day battery"
  },
  {
    title: "AirPods Pro 2nd Gen",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop",
    price: { currentPrice: "$249.00" },
    details: "Active noise cancellation, spatial audio, sweat and water resistant"
  },
  {
    title: "LG C3 55-inch OLED TV",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
    price: { currentPrice: "$1,496.99" },
    details: "Perfect blacks, infinite contrast, webOS smart platform"
  },
  {
    title: "Fitbit Sense 2",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca359?w=400&h=400&fit=crop",
    price: { currentPrice: "$299.95" },
    details: "Advanced health monitoring, stress management, 6+ day battery"
  },
  {
    title: "Garmin Fenix 7",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca359?w=400&h=400&fit=crop",
    price: { currentPrice: "$699.99" },
    details: "Premium multisport GPS watch with solar charging"
  },
  {
    title: "Instant Pot Duo Plus",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    price: { currentPrice: "$119.99" },
    details: "9-in-1 pressure cooker, slow cooker, rice cooker, and more"
  },
  {
    title: "Dyson V15 Detect",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    price: { currentPrice: "$699.99" },
    details: "Laser dust detection, 240AW suction, 60-minute runtime"
  },
  {
    title: "Ninja Foodi 9-in-1",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    price: { currentPrice: "$199.99" },
    details: "Pressure cooker, air fryer, slow cooker, and more in one"
  },
  {
    title: "Vitamix 5200 Blender",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
    price: { currentPrice: "$449.95" },
    details: "Professional-grade blender with 2.2 peak horsepower motor"
  },
  {
    title: "Breville Barista Express",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
    price: { currentPrice: "$699.95" },
    details: "Espresso machine with built-in grinder and steam wand"
  },
  {
    title: "KitchenAid Stand Mixer",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    price: { currentPrice: "$379.99" },
    details: "Classic 4.5-quart stand mixer with 10 speeds"
  },
  {
    title: "Cuisinart Food Processor",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
    price: { currentPrice: "$199.99" },
    details: "14-cup capacity with multiple blades and attachments"
  },
  {
    title: "Philips Hue Starter Kit",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    price: { currentPrice: "$199.99" },
    details: "Smart lighting with 3 bulbs, bridge, and app control"
  },
  {
    title: "Ring Video Doorbell Pro",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    price: { currentPrice: "$169.99" },
    details: "1080p HD video, two-way talk, motion detection"
  },
  {
    title: "Nest Learning Thermostat",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    price: { currentPrice: "$249.00" },
    details: "Smart thermostat that learns your schedule and saves energy"
  },
  {
    title: "Amazon Echo Dot 5th Gen",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    price: { currentPrice: "$49.99" },
    details: "Smart speaker with Alexa, improved sound, and privacy controls"
  },
  {
    title: "Google Nest Hub",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    price: { currentPrice: "$99.99" },
    details: "7-inch smart display with Google Assistant and ambient EQ"
  },
  {
    title: "Samsung Galaxy Tab S9",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    price: { currentPrice: "$799.99" },
    details: "11-inch AMOLED display, S Pen included, all-day battery"
  },
  {
    title: "iPad Pro 12.9-inch",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    price: { currentPrice: "$1,099.00" },
    details: "M2 chip, Liquid Retina XDR display, Pro camera system"
  },
  {
    title: "Microsoft Surface Pro 9",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    price: { currentPrice: "$999.99" },
    details: "2-in-1 laptop and tablet with 13-inch PixelSense display"
  },
  {
    title: "Lenovo ThinkPad X1 Carbon",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop",
    price: { currentPrice: "$1,629.00" },
    details: "14-inch 2.2K display, Intel Core i7, 32GB RAM"
  },
  {
    title: "ASUS ROG Strix G15",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop",
    price: { currentPrice: "$1,299.99" },
    details: "Gaming laptop with RTX 4060, 15.6-inch 165Hz display"
  },
  {
    title: "Razer Blade 15",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop",
    price: { currentPrice: "$1,999.99" },
    details: "Premium gaming laptop with RTX 4070, 15.6-inch QHD display"
  },
  {
    title: "Alienware x16",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop",
    price: { currentPrice: "$2,299.99" },
    details: "16-inch gaming laptop with RTX 4080, Cherry MX keyboard"
  },
  {
    title: "SteelSeries Arctis Pro",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    price: { currentPrice: "$179.99" },
    details: "High-fidelity gaming headset with DTS Headphone:X 2.0"
  },
  {
    title: "Logitech G Pro X Superlight",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    price: { currentPrice: "$149.99" },
    details: "Ultralight wireless gaming mouse, under 63 grams"
  },
  {
    title: "Corsair K100 RGB",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    price: { currentPrice: "$229.99" },
    details: "Mechanical gaming keyboard with optical-mechanical switches"
  },
  {
    title: "BenQ PD2700U",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
    price: { currentPrice: "$599.99" },
    details: "27-inch 4K monitor with 100% sRGB and factory calibration"
  },
  {
    title: "LG 27GP950-B",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
    price: { currentPrice: "$799.99" },
    details: "27-inch 4K gaming monitor with 144Hz refresh rate"
  },
  {
    title: "Samsung Odyssey G9",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
    price: { currentPrice: "$999.99" },
    details: "49-inch ultrawide gaming monitor with 240Hz refresh rate"
  },
  {
    title: "Elgato Stream Deck",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    price: { currentPrice: "$149.99" },
    details: "15 LCD keys for streaming, content creation, and productivity"
  },
  {
    title: "Blue Yeti X",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    price: { currentPrice: "$169.99" },
    details: "Professional USB microphone with Blue VO!CE technology"
  },
  {
    title: "Rode NT-USB",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    price: { currentPrice: "$169.00" },
    details: "Studio-quality USB condenser microphone for recording"
  },
  {
    title: "Shure SM7B",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    price: { currentPrice: "$399.00" },
    details: "Dynamic microphone with smooth, flat, wide-range frequency response"
  },
  {
    title: "Focusrite Scarlett 2i2",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    price: { currentPrice: "$159.99" },
    details: "2-in, 2-out USB audio interface with high-quality preamps"
  }
];

export default products; 