# Universe Studio — Website giới thiệu

Website nhiều trang cho một studio thiết kế / thiết kế game hư cấu tên **Universe**.
Toàn bộ giao diện được xây dựng bằng HTML, CSS và JavaScript thuần, không dùng
framework, build tool hay backend.

## Chạy website

Mở trực tiếp `index.html` bằng trình duyệt, hoặc chạy một HTTP server tĩnh:

```bash
python3 -m http.server 8123
```

Sau đó truy cập <http://localhost:8123>.

Nên chạy qua HTTP server để kiểm tra đầy đủ chuyển trang, hash và clipboard.

## Các trang

| Trang | Nội dung |
| --- | --- |
| `index.html` | Hero, giới thiệu nhanh, dự án chọn lọc, dịch vụ, quy trình, CTA |
| `about.html` | Câu chuyện studio, giá trị, timeline, đội ngũ, giải thưởng |
| `work.html` | Bộ lọc dự án, 6 case study, modal chi tiết |
| `services.html` | Các nhóm dịch vụ, năng lực, quy trình, gói hợp tác, FAQ |
| `contact.html` | Thông tin liên hệ, form demo, trạng thái gửi thành công |
| `404.html` | Trang lỗi “lạc vào một vũ trụ khác” |

## Cấu trúc thư mục

```text
.
├── index.html
├── about.html
├── work.html
├── services.html
├── contact.html
├── 404.html
└── assets
    ├── css
    │   ├── base.css        # token, reset, typography, utility
    │   ├── layout.css      # nền, header, nav, footer, page transition
    │   ├── components.css  # hero, card, dialog, form, accordion, FAQ…
    │   └── pages.css       # bố cục riêng từng trang và responsive
    ├── js
    │   ├── main.js         # nav, reveal, counter, starfield, transition
    │   ├── work.js         # lọc dự án, modal, deep link case study
    │   └── contact.js      # validate form, success state, copy email
    └── img
        ├── favicon.svg
        └── work-*.svg      # artwork cho 6 dự án
```

## Tương tác chính

- Điều hướng mobile dạng overlay, hỗ trợ đóng bằng `Esc`.
- Chuyển trang bằng overlay nhẹ; tôn trọng `prefers-reduced-motion`.
- Starfield vẽ bằng `<canvas>`, hero có parallax nhẹ trên thiết bị có chuột.
- Dự án trên trang chủ deep-link tới `work.html#slug` và tự mở case study.
- Bộ lọc dự án cập nhật số lượng và trạng thái `aria-pressed`.
- Modal case study dùng thẻ `<dialog>` gốc của trình duyệt.
- Accordion dịch vụ và FAQ dùng `<details>`; có thể mở trực tiếp bằng hash
  (ví dụ `services.html#ux-ui`).
- Form liên hệ validate phía client, hiển thị lỗi và trạng thái thành công.

## Lưu ý

- Đây là **frontend demo**. Form không gửi dữ liệu lên server.
- Nội dung, khách hàng, dự án và giải thưởng đều là hư cấu.
- Các liên kết mạng xã hội trỏ tới trang chủ của nền tảng tương ứng.
- Màu sắc, font và khoảng cách có thể tùy chỉnh qua các CSS custom property
  trong `assets/css/base.css`.
