var r = new Rune({
  container: "#canvas",
  width: 525,
  height: 680,
  fill:0,
  debug: true
});

r.rect(0, 0, r.width, r.height).fill(0).stroke(false);

r.ellipse(294, 292, 308, 308)
  .fill(255)
  .stroke(false)

r.triangle(255, 447, 448, 334, 494, 639)
  .fill(255, 255, 255)
  .stroke(0)

r.draw();