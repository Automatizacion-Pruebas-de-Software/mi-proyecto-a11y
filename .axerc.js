module.exports = {
  urls: ["http://localhost:5173/"],
  level: "error",
  standard: "WCAG2AA",
  reporter: "v2",
  output: {
    html: "axe-report.html",
    json: "axe-results.json"
  },
  timeout: 60000,
  wait: 3000
};
