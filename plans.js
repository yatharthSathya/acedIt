document.getElementById("study-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const subjects = document.getElementById("subjects").value.split(",").map(s => s.trim());
  const deadlines = document.getElementById("deadlines").value.split(",").map(d => d.trim());
  const hoursPerDay = parseInt(document.getElementById("hours").value);

  const output = document.getElementById("output");
  output.innerHTML = '<div class="spinner"></div>'
  

  // Construct a prompt for the AI
  const prompt = `Create a weekly study plan for a high school student. The amount of hours that the student has can be decimals or whole numbers, so conver the values to minutes. Give a good balance between subjects and ensure that all deadlines are met, with a detailed plan. The student has the following subjects and deadlines:
The student has the following subjects and deadlines:
Subjects: ${subjects.join(", ")}
Deadlines: ${deadlines.join(", ")}
Available hours/day: ${hoursPerDay}
Output as a day-by-day plan.`;

  try {
    // Replace with your own OpenAI key + endpoint later
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer OPENAI_API_KEY"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        max_tokens: 350,
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7
      })
    });

    const data = await response.json();
    const aiPlan = data.choices?.[0]?.message?.content || "No plan generated.";
    output.textContent = aiPlan;

  } catch (err) {
    output.textContent = "⚠️ Error generating plan. Please check your input or try again later.";
    console.error(err);
  }
});
