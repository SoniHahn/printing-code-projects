var r = new Rune({
  container: "#canvas",
  width: 1280,
  height: 680,
  debug: true
});


r.ellipse(390, 245, 236, 236)
  .fill(0)
  .stroke(false)

r.triangle(320, 344, 500, 296, 495, 624)
  .fill(255, 255, 255)
  .strokeWidth(3)
  .stroke(0)

r.ellipse(303, 329, 65, 65)
  .fill(0)
  .stroke(false)

r.ellipse(355, 313, 65, 65)
  .fill(0)
  .stroke(false)

r.ellipse(410, 298, 65, 65)
  .fill(0)
  .stroke(false)

r.ellipse(465, 284, 65, 65)
  .fill(0)
  .stroke(false)

r.ellipse(510, 271, 65, 65)
  .fill(0)
  .stroke(false)

r.rect(350, 100, 20, 5)
  .fill(255)
  .rotate(15)
  .stroke(false)

r.rect(450, 80, 20, 5)
  .fill(255)
  .rotate(15)
  .stroke(false)

r.rect(370, 80, 5, 20)
  .fill(255)
  .rotate(10)
  .stroke(false)

r.rect(315, 150, 5, 20)
  .fill(255)
  .rotate(7)
  .stroke(false)

r.rect(420, 150, 5, 20)
  .fill(255)
  .rotate(9)
  .stroke(false)

r.rect(500, 30, 5, 20)
  .fill(255)
  .rotate(20)
  .stroke(false)


r.draw();