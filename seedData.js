export const locations = [
  "Hà Nội",
  "Huế",
  "Lai Châu",
  "Điện Biên",
  "Sơn La",
  "Cao Bằng",
  "Lạng Sơn",
  "Quảng Ninh",
  "Thanh Hóa",
  "Nghệ An",
  "Hà Tĩnh",
  "Tuyên Quang",
  "Lào Cai",
  "Thái Nguyên",
  "Phú Thọ",
  "Bắc Ninh",
  "Hưng Yên",
  "Hải Phòng",
  "Ninh Bình",
  "Quảng Trị",
  "Đà Nẵng",
  "Quảng Ngãi",
  "Gia Lai",
  "Khánh Hòa",
  "Lâm Đồng",
  "Đắk Lắk",
  "TP. Hồ Chí Minh",
  "Đồng Nai",
  "Tây Ninh",
  "Cần Thơ",
  "Vĩnh Long",
  "Đồng Tháp",
  "Cà Mau",
  "An Giang",
];

export const buses = [
  {
    busId: "bus_001",
    company: "Phương Trang",
    busType: "Giường nằm A/C",
    price: 320000,
    originalPrice: 350000,
    rating: 4.6,
    totalReviews: 1020,
    badges: ["Thoải mái", "Xuất phát đúng giờ"],
  },
  {
    busId: "bus_002",
    company: "Mai Linh Express",
    busType: "Ghế ngồi A/C",
    price: 180000,
    originalPrice: 210000,
    rating: 4.3,
    totalReviews: 760,
    badges: ["Phục vụ tận tình", "Giá hợp lý"],
  },
  {
    busId: "bus_003",
    company: "Xe Nhà",
    busType: "Giường nằm A/C",
    price: 290000,
    originalPrice: 310000,
    rating: 4.7,
    totalReviews: 890,
    badges: ["Xe mới", "Wifi miễn phí"],
  },
  {
    busId: "bus_004",
    company: "Thành Bưởi",
    busType: "Giường nằm VIP",
    price: 450000,
    originalPrice: 490000,
    rating: 4.8,
    totalReviews: 1340,
    badges: ["Sang trọng", "Nhân viên thân thiện"],
  },
  {
    busId: "bus_005",
    company: "Hoàng Long",
    busType: "Ghế ngồi không A/C",
    price: 130000,
    originalPrice: 150000,
    rating: 4.0,
    totalReviews: 540,
    badges: ["Giá rẻ", "Lịch trình ổn định"],
  },
];

export const generateSeats = () => {
  const seats = [];
  for (let i = 1; i <= 28; i++) {
    let seatType;

    if (i > 24) {
      seatType = i % 4 === 1 ? "window" : "side";
    } else {
      seatType = i % 4 === 1 ? "window" : i % 4 === 2 ? "path" : "side";
    }

    seats.push({
      seat_id: i,
      type: seatType,
      booked: false,
    });
  }
  return Array(7)
    .fill()
    .map((_, row) => seats.slice(row * 4, row * 4 + 4));
};
