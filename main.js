(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        a(o);
    new MutationObserver(o => {
        for (const c of o)
            if (c.type === "childList")
                for (const m of c.addedNodes)
                    m.tagName === "LINK" && m.rel === "modulepreload" && a(m)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function s(o) {
        const c = {};
        return o.integrity && (c.integrity = o.integrity),
            o.referrerPolicy && (c.referrerPolicy = o.referrerPolicy),
            o.crossOrigin === "use-credentials" ? c.credentials = "include" : o.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin",
            c
    }
    function a(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const c = s(o);
        fetch(o.href, c)
    }
}
)();
const z = ["⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣤⣤⣤⣤⡄⠀⠀⠀⠀⠀⠀⠀⠀",
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⠶⠟⠛⠙⠉⠉⠉⠉⠛⠳⠆⢀⣀⡀⠀⠀⠀",
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⠛⠳⣦⡄",
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠨⠙",
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢄⣾⢁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⡾⠛⠛⠷⣄⣀",
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡿⠁⠀⠀⠀⠀⠀⠀",
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣶⠏⠀⠀⠀⠀⠀⠀⠀⠀",
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡏⠀⣠⣀⣀⣤⣤⣤⡴⠶⠷⡆⠀⠀⠀⠀⠀⢠⢀⣀⣀⣄⣤⣤⣤⣴",
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⢹⠁⢽⠉⠁⠀⠁⣀⣤⣠⣤⣼⡄⠀⠀⠀⠈⠛⠋⠉⠻⣿⣿⠇⠀⠀",
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣎⠀⠺⠶⠖⠛⢿⣿⣿⠉⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣼",
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾",
    "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⢿",
    "⠀⠀⠀⠀⠀⠀⠀⢀⡴⠶⢦⡀⠀⠀⠀⠘⢷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⠞⠃⠨",
    "⠀⠀⠀⠀⠀⠀⢀⡿⠁⠀⠀⣿⠀⠀⠀⠀⠈⢷⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣄⣀⣀⣀⣤⡴⠟⠋⣁⣤⠾⢻",
    "⠀⠀⠀⠀⠀⠀⢸⡇⡀⠀⠀⣿⠀⠀⠀⠀⠀⠀⠻⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⢡⣤⠶⠛⠋⢀⣴⣾",
    "⠀⠀⠀⠀⠀⢠⣘⣧⠄⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠈⠻⢦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⡴⠟⠃⠀",
    "⠀⢀⡶⠿⠛⠋⠉⠉⠀⠀⠀⠙⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢛⡳⣶⡶⠶⠶⠶⠶⠶⠞⠛⠉⠁⠀⠀⠀⠀",
    "⠀⣿⢳⠀⢀⣤⡽⠶⣥⣀⠀⠀⢼⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
    "⠀⢿⣎⠀⠀⠀⠀⠀⢀⣿⡁⠀⣼⣇⡈⡀⠀⠀⠀⠀⠀⠀⠀⣤⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
    "⡠⣾⠋⠛⠛⠛⠛⠛⠛⣿⠁⠀⣿⠉⠛⠶⣦⣤⣤⣤⣤⡶⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
    "⠀⢿⣄⡀⠀⠀⠀⣠⣤⢿⡇⠀⢸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
    "⠀⠥⣿⠙⠛⠛⠛⠉⢀⣼⠃⠀⢺⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
    "⠀⠀⠙⣷⡤⢤⠴⠶⠋⢹⡇⢀⣼⡃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
    "⠀⠀⠀⢻⢦⣤⣤⣤⠶⠿⠶⠞⠉⠛⠷⠦⣤⣤⣤⣤⣤⣤⡶⠾⠛⠁⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"]
    , V = "aadityabhoyar.github.io"
    , Y = "visi"
    , J = "aadityabhoyar.github.io"
    , Q = "050823"
    , Z = {
        twitter: "aadityabhoyarr",
        github: "aadityabhoyar",
        linkedin: "aditya-bhoyar"
    }
    , ee = "Thats's my social"
    , te = [["Neo's Adventure", "Puzzle Game (Unity.C#)", "https://play.google.com/store/apps/details?id=com.adityabhoyar.neosadventure"]]
    , re = {
        background: "#000000",
        foreground: "#F8DDE5",
        banner: "#FF9951",
        border: {
            visible: !0,
            color: "#FFADE2"
        },
        prompt: {
            default: "#A5A7A7",
            user: "#FE6BC9",
            host: "#70FDFF",
            input: "#FF7685"
        },
        link: {
            text: "#B6AAEE",
            highlightColor: "#FFADE2",
            highlightText: "#0C0623"
        },
        commands: {
            textColor: "#FD9BDB"
        }
    }
    , r = {
        ascii: z,
        title: V,
        username: Y,
        hostname: J,
        password: Q,
        repoLink: "https://github.com/aadityabhoyar",
        social: Z,
        aboutGreeting: ee,
        projects: te,
        colors: re
    };
(() => {
    const e = document.createElement("style")
        , t = document.head
        , s = `body {background: ${r.colors.background}}`
        , a = `body {color: ${r.colors.foreground}}`
        , o = `input {background: ${r.colors.background}}`
        , c = `input {color: ${r.colors.prompt.input}}`
        , m = `.output {color: ${r.colors.prompt.input}}`
        , I = `#pre-host {color: ${r.colors.prompt.host}}`
        , l = `#host {color: ${r.colors.prompt.host}}`
        , F = `#pre-user {color: ${r.colors.prompt.user}}`
        , x = `#user {color: ${r.colors.prompt.user}}`
        , W = `#prompt {color: ${r.colors.prompt.default}}`
        , U = `pre {color: ${r.colors.banner}}`
        , j = `a {color: ${r.colors.link.text}}`
        , _ = `a:hover {background: ${r.colors.link.highlightColor}}`
        , G = `a:hover {color: ${r.colors.link.highlightText}}`
        , q = `.command {color: ${r.colors.commands.textColor}}`
        , K = `.keys {color: ${r.colors.banner}}`;
    t.appendChild(e),
        e.sheet && (e.sheet.insertRule(`#bars {background: ${r.colors.background}}`),
            e.sheet.insertRule(`main {border-color: ${r.colors.border.color}}`),
            e.sheet.insertRule(`#bar-1 {background: ${r.colors.border.color}; color: ${r.colors.background}}`),
            e.sheet.insertRule(`#bar-2 {background: ${r.colors.border.color}}`),
            e.sheet.insertRule(`#bar-3 {background: ${r.colors.border.color}}`),
            e.sheet.insertRule(`#bar-4 {background: ${r.colors.border.color}}`),
            e.sheet.insertRule(`#bar-5 {background: ${r.colors.border.color}}`),
            e.sheet.insertRule(s),
            e.sheet.insertRule(a),
            e.sheet.insertRule(o),
            e.sheet.insertRule(c),
            e.sheet.insertRule(m),
            e.sheet.insertRule(I),
            e.sheet.insertRule(l),
            e.sheet.insertRule(F),
            e.sheet.insertRule(x),
            e.sheet.insertRule(W),
            e.sheet.insertRule(U),
            e.sheet.insertRule(j),
            e.sheet.insertRule(_),
            e.sheet.insertRule(G),
            e.sheet.insertRule(q),
            e.sheet.insertRule(K))
}
)();
const oe = {
    commands: [["'dev'", "Know about the devloper."], ["'pro'", "Project Aricive."], ["'soc'", "Social."], ["'main'", "Reload the banner again."], ["'cls'", "Clear the terminal."]]
}
    , se = () => {
        const e = [];
        return e.push("<br>"),
            oe.commands.forEach(t => {
                const s = "&nbsp;";
                let a = "";
                a += s.repeat(2),
                    a += "<span class='command'>",
                    a += t[0],
                    a += "</span>",
                    a += s.repeat(17 - t[0].length),
                    a += t[1],
                    e.push(a)
            }
            ),
            e.push("<br>"),
            e.push("Press <span class='keys'>[Tab]</span> for auto completion."),
            e.push("Press <span class='keys'>[Esc]</span> to clear the input line."),
            e.push("Press <span class='keys'>[↑][↓]</span> to scroll through your history of commands."),
            e.push("<br>"),
            e
    }
    , ne = se()
    , ae = () => {
        const e = [];
        return e.push("<br>"),
            r.ascii.forEach(t => {
                let s = "";
                for (let o = 0; o < t.length; o++)
                    t[o] === " " ? s += "&nbsp;" : s += t[o];
                let a = `<pre>${s}</pre>`;
                e.push(a)
            }
            ),
            e.push("<br>"),
            e.push("Welcome to the website"),
            e.push("Type <span class='command'>'h'</span> for a list of all available commands [help] "),
            e.push("<br>"),
            e
    }
    , H = ae()
    , ie = () => {
        const e = []
            , t = "&nbsp;"
            , s = "Twitter / X"
            , a = "Github"
            , o = "Linkedin"
            , c = `<i class='fa-solid fa-envelope'></i> ${s}`
            , m = `<i class='fa-brands fa-github'></i> ${a}`
            , I = `<i class='fa-brands fa-linkedin'></i> ${o}`;
        let l = "";
        return e.push("<br>"),
            e.push(r.aboutGreeting),
            e.push("<br>"),
            l += t.repeat(2),
            l += c,
            l += t.repeat(17 - s.length),
            l += `<a target='_blank' href='https://x.com/${r.social.twitter}'>x/${r.social.twitter}</a>`,
            e.push(l),
            l = "",
            l += t.repeat(2),
            l += m,
            l += t.repeat(17 - a.length),
            l += `<a target='_blank' href='https://github.com/${r.social.github}'>github/${r.social.github}</a>`,
            e.push(l),
            l = "",
            l += t.repeat(2),
            l += I,
            l += t.repeat(17 - o.length),
            l += `<a target='_blank' href='https://www.linkedin.com/in/aditya-bhoyar-64a052238'>linkedin/${r.social.linkedin}</a>`,
            e.push(l),
            e.push("<br>"),
            e
    }
    , le = ie()
    , ce = () => {
        const e = ["<br>", "COMMAND NOT FOUND", "Type <span class='command'>'h'</span> to get started.", "<br>"]
            , t = [];
        return e.forEach(s => {
            t.push(s)
        }
        ),
            t
    }
    , ue = ce()
    , pe = () => {
        let e = "";
        const t = []
            , s = `${r.projects.length} File(s)`
            , a = "&nbsp;";
        return t.push("<br>"),
            r.projects.forEach(o => {
                let c = `<a href="${o[2]}" target="_blank">${o[0]}</a>`;
                e += a.repeat(2),
                    e += c,
                    e += a.repeat(17 - o[0].length),
                    e += o[1],
                    t.push(e),
                    e = ""
            }
            ),
            t.push("<br>"),
            t.push(s),
            t.push("<br>"),
            t
    }
    , he = pe()
    , R = {
        message: [["Hey, I'm Adi, a 21-year-old coder from India✨", "I'm all about bringing my ideas to life through code.", "Whether it's crafting cool apps, game or random project . ", "I'm all in.🤝", "Let's chat tech and make some magic happen!"]]
    }
    , de = () => {
        const e = []
            , t = 0;
        return e.push("<br>"),
            R.message[t].forEach((s, a) => {
                a === R.message[t].length - 1,
                    e.push(s)
            }
            ),
            e.push("<br>"),
            e
    }
    ;
let p = document.getElementById("write-lines"), d = 0, P = "", h, w = !1, S = !1, v = 0, u = !1;
const f = p
    , g = document.getElementById("terminal")
    , i = document.getElementById("user-input")
    , y = document.getElementById("input-hidden")
    , A = document.getElementById("pre-host")
    , L = document.getElementById("pre-user")
    , N = document.getElementById("host")
    , D = document.getElementById("user")
    , T = document.getElementById("prompt")
    , me = ["h", "pro", "soc", "whoami", "main", "cls"]
    , b = []
    , be = r.password
    , fe = r.repoLink
    , M = () => {
        const e = document.getElementById("main");
        e && (e.scrollTop = e.scrollHeight)
    }
    ;
function $(e) {
    const t = e.key;
    switch (t) {
        case "Enter":
            e.preventDefault(),
                S ? Ee() : ge(),
                M();
            break;
        case "Escape":
            i.value = "";
            break;
        case "ArrowUp":
            O(t),
                e.preventDefault();
            break;
        case "ArrowDown":
            O(t);
            break;
        case "Tab":
            ye(),
                e.preventDefault();
            break
    }
}
function ge() {
    if (!p || !T)
        return;
    const e = "";
    let t;
    if (h = i.value,
        u ? t = h : t = `<span class='output'>${h}</span>`,
        b.push(h),
        d = b.length,
        h === "cls") {
        B(h.toLowerCase().trim()),
            i.value = e,
            h = e;
        return
    }
    const s = document.createElement("div");
    s.innerHTML = `<span id="prompt">${T.innerHTML}</span> ${t}`,
        p.parentNode && p.parentNode.insertBefore(s, p),
        h.trim().length !== 0 && B(h.toLowerCase().trim()),
        i.value = e,
        h = e
}
function ye() {
    let e = i.value;
    for (const t of me)
        if (t.startsWith(e)) {
            i.value = t;
            return
        }
}
function O(e) {
    switch (e) {
        case "ArrowDown":
            d !== b.length && (d += 1,
                i.value = b[d],
                d === b.length && (i.value = P));
            break;
        case "ArrowUp":
            d === b.length && (P = i.value),
                d !== 0 && (d -= 1,
                    i.value = b[d]);
            break
    }
}
function B(e) {
    switch (e) {
        case "cls":
            setTimeout(() => {
                !g || !f || (g.innerHTML = "",
                    g.appendChild(f),
                    p = f)
            }
            );
            break;
        case "main":
            n(H);
            break;
        case "h":
            if (u) {
                n(["maybe restarting your browser will fix this.", "<br>"]);
                break
            }
            n(ne);
            break;
        case "dev":
            n(de());
            break;
        case "soc":
            n(le);
            break;
        case "pro":
            n(he);
            break;
        case "github":
            n(["Redirecting to github...", "<br>"]),
                setTimeout(() => {
                    window.open("https://github.com/aadityabhoyar", "_blank")
                }
                    , 500);
            break;
        case "linkedin":
            n(["Redirecting to linkedin...", "<br>"]),
                setTimeout(() => {
                    window.open("https://www.linkedin.com/in/aditya-bhoyar-64a052238/", "_blank")
                }
                    , 500);
            break;
        case "x":
            n(["Redirecting to X (also know as twitter).....", "<br>"]),
                setTimeout(() => {
                    window.open("https://twitter.com/aadityabhoyarr", "_blank")
                }
                    , 500);
            break;
        case "email":
            n(["adityabhoyar.work@gmail.com", "<br>"])
            break;
        case "rm -rf":
            n(["Permission not granted.", "<br>"]);
            break;
        case "sudo":
            n(["Permission not granted.", "<br>"]);
            break;
        case "ls":
            n(["Permission not granted.", "<br>"]);
            break;
        default:
            break
    }
}
function n(e) {
    e.forEach((t, s) => {
        ke(t, s)
    }
    )
}
function ke(e, t) {
    setTimeout(() => {
        if (!p)
            return;
        const s = document.createElement("p");
        s.innerHTML = e,
            p.parentNode.insertBefore(s, p),
            M()
    }
        , 40 * t)
}
function C() {
    !y || !k || (E.value = "",
        i.disabled = !1,
        y.style.display = "block",
        k.style.display = "none",
        S = !1,
        setTimeout(() => {
            i.focus()
        }
            , 200))
}

const Te = () => {
    N && (N.innerText = r.hostname),
        D && (D.innerText = r.username),
        A && (A.innerText = r.hostname),
        L && (L.innerText = r.username),
        window.addEventListener("load", () => {
            n(H)
        }
        ),
        i.addEventListener("keypress", $),
        i.addEventListener("keydown", $),
        E.addEventListener("keypress", $),
        window.addEventListener("click", () => {
            i.focus()
        }
        )
}
    ;
Te();
