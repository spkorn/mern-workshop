// ติดต่อกับฐานข้อมูล
import slugify from "slugify";
// บันทึกข้อมูล
export const create = (req, res) => {
  const { title, content, author } = req.body;
  const slug = slugify(title);

  // validate / ตรวจสอบความถูกต้องของข้อมูล
  switch (true) {
    case !title:
      return res.status(400).json({ error: "กรุณาป้อนชื่อบทความ" });
      break;
    case !content:
      return res.status(400).json({ error: "กรุณาป้อนเนื้อหาบทความ" });
      break;
  }

  res.json({
    data: { title, content, author, slug },
  });
};

// localhost:3000/install-postman
