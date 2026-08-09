document.addEventListener("DOMContentLoaded", function () {

  const generateBtn = document.getElementById("generateBtn");
  const results = document.getElementById("results");
  const error = document.getElementById("error");

  const animeInput = document.getElementById("anime");
  const characterInput = document.getElementById("character");
  const themeInput = document.getElementById("theme");
  const languageInput = document.getElementById("language");

  const themeBtn = document.getElementById("themeBtn");
  const year = document.getElementById("year");
  const toast = document.getElementById("toast");


  // -------------------------
  // GENERATE SEO
  // -------------------------

  generateBtn.addEventListener("click", function () {

    const anime = animeInput.value.trim();
    const character = characterInput.value.trim();
    const theme = themeInput.value;
    const language = languageInput.value;

    error.textContent = "";

    if (!anime || !character) {
      error.textContent =
        "Please enter the anime name and character.";
      return;
    }

    generateBtn.textContent = "⚡ Generating...";

    setTimeout(function () {

      const data = createContent(
        anime,
        character,
        theme,
        language
      );

      showResults(data);

      generateBtn.textContent = "⚡ Generate SEO";

    }, 500);

  });


  // -------------------------
  // CONTENT
  // -------------------------

  function createContent(anime, character, theme, language) {

    const titles = [
      `${character}'s Most Emotional Moment 💔 | ${anime}`,
      `The Pain Behind ${character} 🥀 | ${anime}`,
      `${character} Was Never The Same Again... 💔`,
      `This ${character} Scene Hits Different 🔥`,
      `Nobody Understands ${character}'s Pain...`,
      `${character}'s Story Will Break You 💔`,
      `The Dark Side of ${character} | ${anime}`,
      `${character} — A Character Full of Pain 🥀`
    ];

    const captions = [
      `Sometimes the strongest characters hide the deepest pain. 💔`,
      `Not every hero gets a happy story... 🥀`,
      `Some memories never truly disappear.`,
      `Behind that smile was a story nobody understood.`,
      `This moment changed everything.`,
      `The pain, the memories, the silence... 💔`
    ];

    const description =
`${character}'s story is one of the most unforgettable moments in ${anime}. 💔

This anime edit captures the emotional side of ${character} and the moments that changed their journey forever.

If you enjoyed this edit, support the channel by liking, commenting and subscribing. ❤️

🎬 Anime: ${anime}
👤 Character: ${character}
🎭 Theme: ${theme}
🌐 Language: ${language}

Watch until the end and share your favorite moment in the comments!

#anime #${cleanTag(anime)} #${cleanTag(character)} #animeedit #amv #shorts`;

    const hashtags = [
      "#anime",
      "#animeedit",
      "#amv",
      "#shorts",
      "#ytshorts",
      "#" + cleanTag(anime),
      "#" + cleanTag(character),
      "#" + cleanTag(theme),
      "#animecommunity",
      "#otaku"
    ];

    const keywords = [
      anime,
      character,
      `${character} edit`,
      `${anime} edit`,
      `${character} emotional edit`,
      `${anime} shorts`,
      "anime edit",
      "anime shorts",
      "AMV",
      "anime status",
      `${character} status`
    ];

    const hooks = [
      `You won't understand ${character} until you know this...`,
      `This is why ${character} changed forever...`,
      `Nobody talks about this side of ${character}...`,
      `The moment everything changed for ${character}...`,
      `What if you were in ${character}'s place?`,
      `This scene explains ${character}'s entire story...`
    ];

    const thumbnail = [
      character.toUpperCase() + " 💔",
      "THE PAIN...",
      "NEVER FORGOT",
      "BROKE EVERYTHING",
      "THE TRUTH"
    ];

    return {
      titles,
      captions,
      description,
      hashtags,
      keywords,
      hooks,
      thumbnail
    };
  }


  // -------------------------
  // CLEAN TAG
  // -------------------------

  function cleanTag(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");
  }


  // -------------------------
  // SHOW RESULTS
  // -------------------------

  function showResults(data) {

    results.classList.remove("hidden");

    document.getElementById("titles").innerHTML =
      createList(data.titles);

    document.getElementById("captions").innerHTML =
      createList(data.captions);

    document.getElementById("description").textContent =
      data.description;

    document.getElementById("hashtags").innerHTML =
      createTags(data.hashtags);

    document.getElementById("keywords").innerHTML =
      createTags(data.keywords);

    document.getElementById("hooks").innerHTML =
      createList(data.hooks);

    document.getElementById("thumbnail").innerHTML =
      createList(data.thumbnail);

    results.scrollIntoView({
      behavior: "smooth"
    });
  }


  // -------------------------
  // LIST
  // -------------------------

  function createList(items) {

    return items.map(function (item) {

      return `
        <div class="result-item">
          ${escapeHTML(item)}
        </div>
      `;

    }).join("");
  }


  // -------------------------
  // TAGS
  // -------------------------

  function createTags(items) {

    return items.map(function (item) {

      return `
        <span class="tag">
          ${escapeHTML(item)}
        </span>
      `;

    }).join("");
  }


  // -------------------------
  // COPY BUTTONS
  // -------------------------

  document.querySelectorAll(".copy-all").forEach(function (button) {

    button.addEventListener("click", function () {

      const target =
        document.getElementById(button.dataset.target);

      if (!target) return;

      const text = target.innerText;

      navigator.clipboard.writeText(text)
        .then(function () {
          showToast("Copied!");
        })
        .catch(function () {
          showToast("Copy failed");
        });

    });

  });


  // -------------------------
  // TOAST
  // -------------------------

  function showToast(message) {

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(function () {
      toast.classList.remove("show");
    }, 1800);
  }


  // -------------------------
  // DARK / LIGHT MODE
  // -------------------------

  if (themeBtn) {

    themeBtn.addEventListener("click", function () {

      document.body.classList.toggle("light");

      if (document.body.classList.contains("light")) {

        themeBtn.textContent = "☀️";

        localStorage.setItem(
          "aniboost-theme",
          "light"
        );

      } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem(
          "aniboost-theme",
          "dark"
        );
      }

    });

  }


  // Load saved theme

  if (
    localStorage.getItem("aniboost-theme") === "light"
  ) {

    document.body.classList.add("light");

    if (themeBtn) {
      themeBtn.textContent = "☀️";
    }
  }


  // -------------------------
  // YEAR
  // -------------------------

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  // -------------------------
  // ESCAPE HTML
  // -------------------------

  function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
  }

});