function getElementWidth(content, padding, border) {
  content = parseFloat(content.replace("px", ""));
  padding = parseFloat(padding.replace("px", ""));
  border = parseFloat(border.replace("px", ""));
  const result = content + 2 * padding + 2 * border;
  return result;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
