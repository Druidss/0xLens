帮我精简 DESIGN_SPEC 中的内容;复制一份新的文件做DESIGN_GUIDE 不需要过于复杂的交互的描述, 不需要代码实现
帮我重新定一系统的vi: 
形似的css 如下
要这个黑色 和 绿色, 同时做多和做空也要使用荧光绿色 和红色
 [data-theme="dark"], [data-theme="invert"], [data-theme="light"] [data-theme="invert"] {
    --theme--background: var(--swatch--dark);
    --theme--text: var(--swatch--light);
    --theme--border: var(--swatch--dark-border);
    --theme--card: var(--swatch--dark-secondary);
    --button--background: var(--swatch--brand);
    --button--text: var(--swatch--dark);
    --button--border: var(--swatch--brand);
    --button--background-hover: var(--swatch--light);
    --button--text-hover: var(--swatch--dark);
    --button--border-hover: var(--swatch--light);
    --button-secondary--background: var(--swatch--dark-secondary);
    --button-secondary--text: var(--swatch--light);
    --button-secondary--border: var(--swatch--dark-secondary);
    --button-secondary--background-hover: var(--swatch--brand);
    --button-secondary--text-hover: var(--swatch--dark);
    --button-secondary--border-hover: var(--swatch--brand);

    :root {
    --theme--background: white;
    --text-main--font-family: var(--font--primary-family);
    --theme--text: white;
    --text-main--font-size: var(--size--1rem);
    --text-main--line-height: var(--line-height--1-3em);
    --text-main--letter-spacing: var(--letter-spacing--0-02em);
    --h1--font-family: var(--all-headings--heading-font-family);
    --h1--font-size: var(--size--5rem);
    --h1--line-height: var(--line-height--0-9em);
    --display--font-family: var(--all-headings--heading-font-family);
    --display--font-size: var(--size--7rem);
    --display--line-height: var(--all-headings--heading-line-height);
    --display--letter-spacing: var(--all-headings--heading-letter-spacing);
    --h1--letter-spacing: var(--all-headings--heading-letter-spacing);
    --h2--font-family: var(--all-headings--heading-font-family);
    --h2--font-size: var(--size--3-5rem);
    --h2--line-height: var(--all-headings--heading-line-height);
    --h2--letter-spacing: var(--all-headings--heading-letter-spacing);
    --h3--font-family: var(--all-headings--heading-font-family);
    --h3--font-size: var(--size--2rem);
    --h3--line-height: var(--all-headings--heading-line-height);
    --h3--letter-spacing: var(--all-headings--heading-letter-spacing);
    --h4--font-family: var(--all-headings--heading-font-family);
    --h4--font-size: var(--size--1-5rem);
    --h4--line-height: var(--line-height--1-1em);
    --h4--letter-spacing: var(--letter-spacing--0em);
    --h5--font-family: var(--all-headings--heading-font-family);
    --h5--font-size: var(--size--1rem);
    --h5--line-height: var(--line-height--1-1em);
    --h5--letter-spacing: var(--letter-spacing--0em);
    --h6--font-family: var(--all-headings--heading-font-family);
    --h6--font-size: .625rem;
    --h6--line-height: var(--line-height--1-3em);
    --h6--letter-spacing: var(--letter-spacing--0-02em);
    --space--small: var(--size--1-5rem);
    --border-width--main: 1.5px;
    --theme--border: white;
    --radius--main: var(--size--1-25rem);
    --size--0-5rem: .5rem;
    --size--0-75rem: .75rem;
    --radius--small: var(--size--0-5rem);
    --line-height--1em: 1em;
    --space--extra-small: var(--size--1rem);
    --swatch--transparent: #fff0;
    --size--1-5rem: 1.5rem;
    --swatch--brand: #e5ff5d;
    --radius--round: 100vw;
    --size--2-5rem: 2.5rem;
    --text-small--font-family: var(--font--primary-family);
    --text-small--font-size: var(--size--0-75rem);

    这个是毛玻璃效果的实现:
    .swiper-slide {
    padding-top: var(--size--4rem);
    padding-right: var(--size--3rem);
    padding-bottom: var(--size--3rem);
    padding-left: var(--size--3rem);
    border-top-style: solid;
    border-top-width: var(--border-width--main);
    border-top-color: var(--theme--border);
    border-right-style: solid;
    border-right-width: var(--border-width--main);
    border-right-color: var(--theme--border);
    border-bottom-style: solid;
    border-bottom-width: var(--border-width--main);
    border-bottom-color: var(--theme--border);
    border-left-style: solid;
    border-left-width: var(--border-width--main);
    border-left-color: var(--theme--border);
    border-top-left-radius: var(--radius--main);
    border-top-right-radius: var(--radius--main);
    border-bottom-left-radius: var(--radius--main);
    border-bottom-right-radius: var(--radius--main);
    /* background-color: 
 color-mix(in srgb, var(--theme--card) 40%, transparent); */
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    width: 100%;


    好 给这个界面的背景加入一个以vi 为底色的渐变背景颜色, 然后完善这个html, 构建一个由多个卡片组成的界面 
    