// ติดต่อกับฐานข้อมูล
import slugify from "slugify";
// บันทึกข้อมูล
export const create = (req, res) => {
  const { title, content, author } = req.body;
  const slug = slugify(req.body.slug);
  res.json({
    data: { title, content, author, slug },
  });
};

// localhost:3000/install-postman
