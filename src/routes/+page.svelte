<script lang="js">
    import Spacer from "../components/Spacer.svelte";
    import Section from "../components/Section.svelte";
</script>

<style lang="scss">
</style>

<div>

    <Section transparent={true}>
        <span class="number"><h1 class="text-[8rem] mb-[2rem] mt-[10rem] font-['JetBrains_Mono']">0xf00dbabe</h1></span>
        <div class="text-text-primary text-xl font-['JetBrains_Mono'] text-center">Just your average Assembly and C programmer</div>
    </Section>

    <Spacer/>
    
    <Section>
        <h1 class="text-5xl mb-[10rem] font-['JetBrains_Mono']"><span class="error"># </span><span class="text-text-primary">whoami</span></h1>
        <div class="text-center">
            <p class="text-text-primary text-xl font-['JetBrains_Mono']">
                I don't like it when my name is posted on the Internet, so <span class="string">"Dani"</span> is as much as you're gonna get.
            </p>
            <p class="text-text-primary text-xl font-['JetBrains_Mono']">
                I started taking an interest in computers when I was about <span class="number">7</span> or <span class="number">8</span>.
                Most games were too demanding for my poor Core 2 Duo E6320 and Radeon X550 XT,
                so I had to get <span class="string">"creative"</span> with the fun I could have.
            </p>
            <p class="text-text-primary text-xl font-['JetBrains_Mono']">
                I started by modding GTA San Andreas, studying how Counter Strike <span class="number">1.6</span> and GoldSrc worked,
                and writing random batch scripts (as any script kiddy would do),
                but, to be fair, I had no idea what I was doing at that time...
            </p>
            <p class="text-text-primary text-xl font-['JetBrains_Mono']">
                My interest in computers started to take off when I was in 5th grade (<span class="number">10</span>-<span class="number">11</span> years old).
                I started learing C++ with AVR microcontrollers (Arduino UNO), and I instantly fell in ❤️ with
                programming.
            </p>
            <p class="text-text-primary text-xl font-['JetBrains_Mono']">
                As of writing this, it's <span class="number">2022</span> and i'm almost <span class="number">17</span>. By now I've dabbled in almost every type of programming
                I can think of. From Python scripts, to Assembly and OS development. Recently I've also taken an interest
                in Binary Exploitation and Reverse Engineering, but I'm not as good at that as I wish.
            </p>
        </div>
    </Section>
</div>