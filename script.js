document.addEventListener("DOMContentLoaded", function() {
    const content = [
        { type: "title", text: "GOD" },
        { type: "title", text: "Book I: God" },
        { type: "subtitle", text: "God Is The System Outside Of All Systems." },
        { type: "paragraph", text: "God is the system outside of all systems. That's what people don't realize. My God is the greatest God of them all. I told someone I could prove God was real. And they said my proof actually proves He's not real. So the proof somehow seems to satisfy both theists and atheists. Everyone can agree with the proof on some level. And it really seems to come down to your definition of what is real." },
        { type: "subtitle", text: "Did God Create Good?" },
        { type: "paragraph", text: "Let me bring you into a thought experiment. Many people have asked \"Did God create evil?\" But what I want to know is \"Did God create good?\" It is an important question, because if the answer is no, then think about it: You'd be saying that God didn't create good; that \"good\" exists with or without God on its own somehow. And if God didn't create good, then that wouldn't really be \"God\" if you define God as the originator of all things. But if you say \"YES, God DID create good\" then what was God before He created good? God was neither good nor evil. God could not have been good when He created good, because that is an obvious contradiction. He couldn't have been, because it hadn't been invented yet." },
        { type: "paragraph", text: "This argument rests on temporal language. It all depends on 'before' and 'after.' It rests on the idea that God created time before the other stuff, but we do not need to confine this idea to time. We can instead think of it in terms of abstractions, or systems." },
        { type: "subtitle", text: "God and Systems" },
        { type: "paragraph", text: "For any abstract system, there exists a system outside of that system that is less abstract and contains more total information. For instance, a wave in a bathtub is a system that has a system outside of it: the molecules of water behaving according to Newtonian physics. But even that system has a system outside of it that is less abstract. Quantum mechanics actually governs the properties of all particles." },
        { type: "paragraph", text: "So, the question on if God created good becomes: \"Does God exist within the system of good or outside of the system of good?\" We have completely separated the idea from any concept of time or \"before\" or \"after.\" If God exists within the system of good, then \"God\" is good but He isn't really God at that point because there is a system outside of God that He has no control over. Because it is outside of Him by definition. This leads us to consider God outside of the system of good. Well, not really \"outside of\" but more superseding. God is what underlies reality, and good is an abstraction that has been abstracted OUT from God. I am saying that good is made out of God. Everything is made out of God, or God created everything, same thing." },
        { type: "subtitle", text: "The Attributeless God" },
        { type: "paragraph", text: "I don't believe in a personal God at all. I think God is completely impersonal, and I will explain why I think this. I think the \"system\" of God contains Good and Evil. As in:" },
        { type: "paragraph", text: "God is neither good nor evil." },
        { type: "paragraph", text: "If God was good, then He would exist in the system of good and there would be a system greater than God which He did not create." },
        { type: "paragraph", text: "And you can make this same exact argument with any attribute. God is neither green nor non-green because He created both. You cannot apply any attribute to God because that implies God did not create that attribute. What is the next question to ask?" },
        { type: "subtitle", text: "Did God create existence itself?" },
        { type: "paragraph", text: "Well, did He? If God did not create existence then He would be contained within the system of existence and that would not be God, because God is the system outside of all systems. We must accept that God DID create existence if we are to believe it is really God. So… that means God doesn't exist? Nope. Not at all. It means that God neither exists nor doesn't exist. It means that God is above the system of existence itself. You can say God is real to sum it up but at the end of the day God is ABOVE the system of real, he is above the system of non-real too, if there is such a thing." },
        { type: "title", text: "Book II: Moderate Realism" },
        { type: "paragraph", text: "Let's talk about The Problem of Universals in philosophy! Wait, why? Only because this proof of God relies on an ontological understanding of the universe called Moderate Realism. What is Moderate Realism? It basically just say that abstractions are just as real as their underlying reality. What do I mean by that? Let's dive into the world of the Realism vs Nominalism axis." },
        { type: "paragraph", text: "There is a spectrum of belief about the \"reality\" of an abstraction. I'll tell you that the lion's share of philosophers are Nominalists (41.9%), some are Platonists (38.4%), and less than 19% are Moderate Realists (Bourget & Chalmers, 2023). But that is all about to change. Anyways, here's a quick breakdown from Extreme Realism to Extreme Nominalism:" },
        { type: "paragraph", text: "Platonic Realism: Abstractions are more real than physical objects. It is basically the view that our world is just an abstraction of the world of Forms (à la <a href='https://plato.stanford.edu/entries/plato/'>Plato</a>). Realism: Abstractions exist independently. Moderate Realism: Abstractions exist dependently, and are the same level of real as their underlying reality. Conceptualism: Abstractions only exist in the mind. Entities like temperature may have some kind of existence in the physical world, but they exist primarily as concepts in the mind. Nominalism: Abstractions exist, but their level of reality is less than physical objects. Buddhism: Abstractions don't exist, they are all illusions. The only existence is the underlying, ultimate reality." },
        { type: "subtitle", text: "What is Nominalism?" },
        { type: "paragraph", text: "\"Nom\" means name, and as such the Nominalist believes that abstract concepts exist in name only. The concept of \"red\"? It's just a linguistic shorthand for the particular photons that make up red. That's the Nominalist view, anyway." },
        { type: "subtitle", text: "What is Realism?" },
        { type: "paragraph", text: "The Realist, on the other hand, would argue that abstract concepts like \"red\" have an existence beyond mere linguistic convenience. They might contend that \"redness\" is a real property that exists independently of our perception or language." },
        { type: "subtitle", text: "What is Moderate Realism?" },
        { type: "paragraph", text: "The moderate realist position attempts to find a middle ground. It suggests that while abstract concepts do have some form of real existence, this existence is dependent on the particular things that instantiate them. For example, \"redness\" exists, but only insofar as there are red things in the world." },
        { type: "paragraph", text: "I'd like to go in depth and talk about how each one of these views on abstraction is a different answer to The Problem of Universals. That would be a great starting point if you want to learn more about this stuff. And I will be writing books on the logical consequences of Moderate Realism that have profound effects on many different areas of philosophy. But this book is called GOD so that is the focus here." },
        { type: "paragraph", text: "Every view has its own advantages and its own downsides, no doubt. Each position has many brilliant and thoughtful people that side with it. But Moderate Realism makes the most logical sense, and on top of that it is provable (see The Consciousness Proof in the next section). When I think of Moderate Realism in recent academia, the philosopher David Malet Armstrong comes to mind, and his book \"Universals: An Opinionated Introduction\" (which is fantastic by the way). That book is another great entry point if you want to dive deeper into Moderate Realism. And to reiterate and remind everyone: in plain language, Moderate Realism just basically says that abstractions are as real as their underlying reality." },
        { type: "subtitle", text: "The Consciousness Proof" },
        { type: "paragraph", text: "There is a very simple proof for Moderate Realism. You consciousness is just an abstraction based on the activity of the atoms in your brain. But your consciousness is undeniably real. Therefore, abstractions are just as real as their underlying reality. I think this is really easy and simple to see once you wrap your head around what I'm talking about. Consciousness itself must be a \"mere\" abstraction. But, sans any supernatural forces or supernatural souls, the abstraction is clearly not \"mere\". It is the most real thing, the only real thing that we have every experienced. Moderate Realism, therefore becomes undeniable unless you believe in some kind of supernatural soul or non-physicalism." },
        { type: "title", text: "Final Section: You Are The Key" },
        { type: "paragraph", text: "We have used logic and reason to reason about what God must be like, if there is such a thing. We have also provided arguments for why God must be \"real.\" And finally, we backed up our understanding with a solid and rigorous philosophical foundation. We have the academic literature that argues for Moderate Realism. All that is left is YOU. What will YOU decide to do with this knowledge? By reading this book you have already passed The Second Gate. I want you to join our private discord. But before that you need to pass The Third Gate. The rest of your journey will be in the cyber world. As in, the Third Gate is an online test. Here is the URL, just be open and honest:" },
        { type: "title", text: "Works Cited" },
        { type: "paragraph", text: "Bourget, D. & Chalmers, D. J., (2023) \"Philosophers on Philosophy: The 2020 PhilPapers Survey\", Philosophers' Imprint 23: 11. doi: https://doi.org/10.3998/phimp.2109" }
    ];

    let currentIndex = 0;
    const bookletContent = document.getElementById("booklet-content");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");

    function updateContent() {
        const item = content[currentIndex];
        let html = "";
        if (item.type === "title") {
            html = `<h1>${item.text}</h1>`;
        } else if (item.type === "subtitle") {
            html = `<h2>${item.text}</h2>`;
        } else {
            html = `<p>${item.text}</p>`;
        }
        bookletContent.innerHTML = html;
        
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === content.length - 1;
        
        updateButtonLabels();
    }

    function updateButtonLabels() {
        if (currentIndex === 0) {
            prevButton.textContent = "Start";
            nextButton.textContent = "Begin";
        } else if (currentIndex === content.length - 1) {
            prevButton.textContent = "Back";
            nextButton.textContent = "Finish";
        } else {
            prevButton.textContent = "Previous";
            nextButton.textContent = "Next";
        }
    }

    prevButton.addEventListener("click", function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateContent();
        }
    });

    nextButton.addEventListener("click", function() {
        if (currentIndex < content.length - 1) {
            currentIndex++;
            updateContent();
        }
    });

    // Initial content update
    updateContent();
});
