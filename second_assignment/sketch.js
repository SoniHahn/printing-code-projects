var r = new Rune({
  container: "#canvas",
  width: 525,
  height: 680,
  fill:0,
  debug: true
});

r.rect(0, 0, r.width, r.height).fill(0).stroke(false);

r.ellipse(297, 294, 546, 546)
  .fill(255)
  .stroke(false)

r.ellipse(303, 296, 534, 546)
  .fill(0)
  .stroke(false)

r.ellipse(294, 725, 1810, 219)
  .fill(255)
  .stroke(false)
  .rotate(-3)

r.ellipse(257, 727, 1810, 219)
  .fill(0)
  .stroke(false)
  .rotate(-3)

r.rect(470, 552, 2, 48)
  .fill(255)
  .stroke(0)


r.triangle(441, 553, 471, 554, 434, 574)
  .fill(255)
  .stroke(0)

r.triangle(473, 559, 486, 553, 498, 568)
  .fill(255)
  .stroke(0)

r.triangle(466, 567, 478, 569, 460, 584)
  .fill(255)
  .stroke(0)



r.draw();