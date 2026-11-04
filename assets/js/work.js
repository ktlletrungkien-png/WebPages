/* ==========================================================================
   Universe — work.js
   Case-study filtering and project detail dialog (work.html only)
   ========================================================================== */

(() => {
  "use strict";

  const projects = {
    "orbital-drift": {
      title: "Orbital Drift",
      category: "Game Design",
      year: "2026",
      client: "Northstar Games",
      role: "Game design · UI/UX · Prototype",
      field: "Sci-fi adventure",
      image: "assets/img/work-orbital.svg",
      summary:
        "Một tựa game phiêu lưu không gian, nơi giao diện không chỉ để điều hướng mà còn là một phần của câu chuyện.",
      challenge:
        "Northstar mang đến một bản build đầy tham vọng, nhưng hệ thống menu dày đặc khiến người chơi mới bỏ cuộc trước khi kịp hiểu thế giới. Họ cần một lớp trải nghiệm rõ ràng hơn mà không đánh mất chiều sâu vốn có.",
      approach:
        "Chúng tôi bắt đầu bằng 12 buổi playtest, vẽ lại toàn bộ luồng onboarding và biến giao diện thành một “bản đồ sống” phản hồi theo trạng thái của con tàu. Mỗi thành phần UI đều có lý do tồn tại và một nhịp xuất hiện riêng.",
      outcome:
        "Bản playtest với 40 người chơi cho thấy người mới hiểu cơ chế nhanh hơn đáng kể, trong khi người chơi kỳ cựu vẫn có đủ độ sâu để khám phá. Hệ thống UI được bàn giao dưới dạng design system có thể mở rộng.",
      metrics: [
        { value: "+38%", label: "Tỷ lệ hoàn thành onboarding" },
        { value: "4.8/5", label: "Điểm rõ ràng sau playtest" },
        { value: "12", label: "Tuần từ brief đến bàn giao" },
      ],
    },

    "nebula-os": {
      title: "Nebula OS",
      category: "Product Design",
      year: "2025",
      client: "Nebula Labs",
      role: "UX research · UI · Design system",
      field: "Collaboration platform",
      image: "assets/img/work-nebula.svg",
      summary:
        "Hệ thống thiết kế và trải nghiệm cộng tác cho một nền tảng sáng tạo dành cho những đội ngũ phân tán.",
      challenge:
        "Nebula có sáu công cụ rời rạc cho ý tưởng, bình luận, tài liệu và bàn giao. Người dùng liên tục mất ngữ cảnh khi chuyển qua lại, còn đội ngũ sản phẩm thì không có một ngôn ngữ thiết kế chung.",
      approach:
        "Chúng tôi hợp nhất trải nghiệm thành một không gian làm việc theo mô hình “canvas + lớp”, rồi xây dựng design system gồm 120 component với token màu, chữ và chuyển động dùng chung cho web lẫn desktop.",
      outcome:
        "Bản beta ra mắt sau 16 tuần với thời gian onboarding ngắn hơn 42%. Design system hiện là nền tảng cho toàn bộ đội sản phẩm và được cập nhật mỗi hai tuần.",
      metrics: [
        { value: "−42%", label: "Thời gian onboarding" },
        { value: "120", label: "Component trong hệ thống" },
        { value: "6 → 1", label: "Công cụ được hợp nhất" },
      ],
    },

    "signal-noise": {
      title: "Signal/Noise",
      category: "Brand Identity",
      year: "2025",
      client: "Signal/Noise Studio",
      role: "Brand strategy · Identity · Art direction",
      field: "Sound & culture",
      image: "assets/img/work-signal.svg",
      summary:
        "Một hệ thống nhận diện táo bạo cho studio âm thanh độc lập, nơi nhiễu loạn trở thành ngôn ngữ.",
      challenge:
        "Các studio âm thanh thường cạnh tranh bằng danh mục dự án dài. Signal/Noise cần một bản sắc đủ mạnh để được nhớ đến chỉ sau một cái nhìn, mà vẫn linh hoạt cho poster, video và không gian biểu diễn.",
      approach:
        "Ý tưởng “tín hiệu trong nhiễu” được chuyển thành sự đối lập giữa kiểu chữ đặc và đường nét mảnh, giữa nền kem và mảng đen, cùng một hệ thống poster có thể chuyển động theo nhịp nhạc.",
      outcome:
        "Bộ nhận diện mới giúp studio tăng gấp ba lượt tiếp cận hữu cơ trong ba tháng đầu, đồng thời trở thành điểm nhấn tại lễ hội âm nhạc điện tử mùa thu.",
      metrics: [
        { value: "3×", label: "Lượt tiếp cận hữu cơ" },
        { value: "18", label: "Ấn phẩm trong bộ nhận diện" },
        { value: "3", label: "Tháng từ brief đến ra mắt" },
      ],
    },

    "echoes-of-io": {
      title: "Echoes of Io",
      category: "Game Design",
      year: "2024",
      client: "Kite Studio",
      role: "Worldbuilding · Narrative · Game design",
      field: "Exploration game",
      image: "assets/img/work-echo.svg",
      summary:
        "Xây dựng thế giới và ngôn ngữ thị giác cho một game khám phá cô đơn giữa lòng hành tinh băng.",
      challenge:
        "Kite muốn một thế giới không lời thoại, không HUD, nhưng vẫn phải kể được câu chuyện rõ ràng. Người chơi cần hiểu mình đang đi đâu mà không có bất kỳ chỉ dẫn trực tiếp nào.",
      approach:
        "Chúng tôi tạo ra một “kinh thánh” về Io: lịch sử, hệ thống ký hiệu môi trường, quy tắc ánh sáng dẫn đường và nhịp độ khám phá. Mọi vật thể trong game đều trả lời một câu hỏi của người chơi.",
      outcome:
        "Prototype được trình diễn tại hai showcase quốc tế. Cộng đồng bắt đầu tự giải mã các ký hiệu trên diễn đàn — đúng điều Kite mong muốn: một thế giới không giải thích, nhưng biết cách lắng nghe.",
      metrics: [
        { value: "2", label: "Showcase quốc tế" },
        { value: "0", label: "Dòng lời thoại trong game" },
        { value: "9", label: "Tháng xây dựng thế giới" },
      ],
    },

    tidal: {
      title: "Tidal",
      category: "Product Design",
      year: "2024",
      client: "Tidal Labs",
      role: "UX research · Product design · UI",
      field: "Focus & wellbeing",
      image: "assets/img/work-tidal.svg",
      summary:
        "Một ứng dụng giúp người làm sáng tạo hiểu nhịp tập trung của chính mình, mà không tạo thêm áp lực.",
      challenge:
        "Thị trường đầy những ứng dụng năng suất với chuỗi ngày liên tục và thông báo thúc giục. Tidal cần một hướng đi ngược lại: nhẹ nhàng, riêng tư và không phán xét.",
      approach:
        "Chúng tôi thiết kế theo hình mẫu thủy triều: dữ liệu hiển thị theo nhịp lên xuống, ngôn ngữ trung tính và ba chế độ tập trung có thể bật tắt chỉ bằng một chạm. Mọi thông báo đều là tùy chọn.",
      outcome:
        "Sau tám tuần thử nghiệm với 60 người dùng, thời lượng phiên tập trung tăng 24,8% và ứng dụng giữ được điểm đánh giá 4,7 sao trên cửa hàng.",
      metrics: [
        { value: "+24.8%", label: "Thời lượng tập trung" },
        { value: "4.7★", label: "Điểm đánh giá trung bình" },
        { value: "60", label: "Người dùng thử nghiệm" },
      ],
    },

    "atlas-of-small-things": {
      title: "Atlas of Small Things",
      category: "Editorial Design",
      year: "2023",
      client: "Atlas Press",
      role: "Art direction · Editorial design · Web",
      field: "Digital publishing",
      image: "assets/img/work-atlas.svg",
      summary:
        "Một tạp chí số về những điều nhỏ bé, được thiết kế như một bộ sưu tập có thể chạm vào.",
      challenge:
        "Atlas Press cần một định dạng đọc chậm giữa thời đại lướt nhanh, nhưng vẫn phải thân thiện trên di động và đủ nhẹ để không làm mất đi sự tĩnh lặng của nội dung.",
      approach:
        "Chúng tôi xây dựng một hệ thống lưới biên tập linh hoạt, kết hợp minh họa tùy chỉnh, chuyển động nhẹ và phiên bản in giới hạn. Mỗi bài viết có nhịp đọc riêng như một trang sách.",
      outcome:
        "Thời gian đọc trung bình tăng hơn gấp đôi. Bộ ấn phẩm in được trưng bày tại một hội sách thiết kế độc lập, và Atlas Press tiếp tục mở rộng series với hai số mới.",
      metrics: [
        { value: "+112%", label: "Thời gian đọc trung bình" },
        { value: "24", label: "Bài viết trong số đầu" },
        { value: "3", label: "Ấn bản in giới hạn" },
      ],
    },
  };

  const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
  const cards = Array.from(document.querySelectorAll("[data-category]"));
  const filterStatus = document.querySelector("[data-filter-status]");
  const dialog = document.getElementById("project-dialog");

  /* ------------------------------------------------------------------------
     Filters
     ---------------------------------------------------------------------- */
  if (filterButtons.length && cards.length) {
    const applyFilter = (filter) => {
      let visible = 0;

      cards.forEach((card) => {
        const show = filter === "all" || card.dataset.category === filter;
        card.hidden = !show;
        card.classList.toggle("is-hidden", !show);

        if (show) {
          visible += 1;
          card.classList.add("is-visible");
        }
      });

      if (filterStatus) {
        filterStatus.textContent = `${String(visible).padStart(2, "0")} dự án`;
      }

      filterButtons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
      });
    };

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => applyFilter(button.dataset.filter));
    });

    applyFilter("all");
  }

  /* ------------------------------------------------------------------------
     Project detail dialog
     ---------------------------------------------------------------------- */
  if (dialog) {
    const closeButtons = Array.from(dialog.querySelectorAll("[data-dialog-close]"));
    const scrollArea = dialog.querySelector(".project-dialog__scroll");
    const fields = {
      category: dialog.querySelector("[data-detail-category]"),
      title: dialog.querySelector("[data-detail-title]"),
      summary: dialog.querySelector("[data-detail-summary]"),
      client: dialog.querySelector("[data-detail-client]"),
      role: dialog.querySelector("[data-detail-role]"),
      year: dialog.querySelector("[data-detail-year]"),
      field: dialog.querySelector("[data-detail-field]"),
      challenge: dialog.querySelector("[data-detail-challenge]"),
      approach: dialog.querySelector("[data-detail-approach]"),
      outcome: dialog.querySelector("[data-detail-outcome]"),
      metrics: dialog.querySelector("[data-detail-metrics]"),
      image: dialog.querySelector("[data-detail-image]"),
    };

    const fillProject = (project) => {
      if (fields.category) {
        fields.category.textContent = `${project.category} — ${project.year}`;
      }
      if (fields.title) fields.title.textContent = project.title;
      if (fields.summary) fields.summary.textContent = project.summary;
      if (fields.client) fields.client.textContent = project.client;
      if (fields.role) fields.role.textContent = project.role;
      if (fields.year) fields.year.textContent = project.year;
      if (fields.field) fields.field.textContent = project.field;
      if (fields.challenge) fields.challenge.textContent = project.challenge;
      if (fields.approach) fields.approach.textContent = project.approach;
      if (fields.outcome) fields.outcome.textContent = project.outcome;

      if (fields.image) {
        fields.image.src = project.image;
        fields.image.alt = `${project.title} — ${project.category}`;
      }

      if (fields.metrics) {
        fields.metrics.replaceChildren(
          ...project.metrics.map((metric) => {
            const item = document.createElement("div");
            item.className = "detail-metric";

            const value = document.createElement("strong");
            value.textContent = metric.value;

            const label = document.createElement("span");
            label.textContent = metric.label;

            item.append(value, label);
            return item;
          })
        );
      }
    };

    const openProject = (slug, updateHash = true) => {
      const project = projects[slug];
      if (!project) return;

      fillProject(project);

      if (!dialog.open) {
        dialog.showModal();
      }

      document.body.classList.add("modal-open");

      if (scrollArea) scrollArea.scrollTop = 0;

      if (updateHash) {
        window.history.replaceState(null, "", `#${slug}`);
      }
    };

    closeButtons.forEach((button) => {
      button.addEventListener("click", () => dialog.close());
    });

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener("close", () => {
      document.body.classList.remove("modal-open");

      const slug = window.location.hash.slice(1);
      if (projects[slug]) {
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search
        );
      }
    });

    document.addEventListener("click", (event) => {
      const trigger = event.target.closest("[data-project]");
      if (!trigger) return;

      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const slug = trigger.dataset.project;
      if (!projects[slug]) return;

      event.preventDefault();
      openProject(slug);
    });

    const fromHash = window.location.hash.slice(1);
    if (projects[fromHash]) {
      window.requestAnimationFrame(() => openProject(fromHash, false));
    }

    window.addEventListener("hashchange", () => {
      const slug = window.location.hash.slice(1);
      if (projects[slug] && !dialog.open) {
        openProject(slug, false);
      }
    });
  }
})();
