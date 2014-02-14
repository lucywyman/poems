function randomquote(){
var quotes=[
"'Man is least himself when he talks in his own person. Give him a mask, and he will tell you the truth.' ~Oscar Wilde",
"Appreciative love gazes and holds it's breath and is silent, rejoices that such a wonder should exist even if not for him, will not be wholly dejected by losing her, would rather have it so than to never have seen her at all' ~ CS Lewis, 'The four loves'",
"'There is nothing good or bad, but thinking makes it so' ~William Shakespeare, <i>Hamlet</i>",
"'What is now proved was once only imagin/'d' ~William Blake, <i>The Marriage of Heaven and Hell</i>",
"'The soul of sweet delight can never be defil/'d' ~William Blake, <i>The Marriage of Heaven and Hell</i>",
"'Sooner murder an infant in its cradle than nurse unacted desires' ~William Blake, <i>The Marriage of Heaven and Hell</i>",
"'To die by your side is such a heavenly way to die' ~The Smiths, 'There is a Light that Never Goes Out'",
"'Man, unlike any other thing organic or inorganic in the universe, grows beyond his work, walks up the stairs of his concepts, emerges ahead of his accomplishments.' ~John Steinbeck, <i>The Grapes of Wrath</i>",
"'Every man carries the boulder of what he's done behind him' ~Max Brooks, <i>World War Z</i>",
"Just do you", 
"'The greatest trick that the devil ever pulled was convincing women that they look better in their makeup' ~Macklemore, 'Thin line'", 
"'Perfection is the disease of a nation' ~Beyonce Knowles, 'Pretty hurts'", 
"'When you die just know the best time of my life has been loving you' ~Macklemore, 'Love song'", 
"'How can you frighten a man whose hunger is not only in his own cramped stomach but in the wretched bellies of his children? You can't scare him--he has known a fear beyond every other.' ~John Steinbeck, <i>The Grapes of Wrath</i>", 
"'She asked me if I loved her. I told her it didn’t mean anything but that I didn’t think so.' ~Albert Camus, <i>The Stranger</i>", 
"We pursue love because it is perfect.  It’s only the people who are flawed.", 
"If it was understandable, they wouldn’t call it love.", 
"I love you when I'm writing this, is my point, and I suppose, in a way, that’s all that anyone can promise, isn't it? I love you right now. Beautiful, in a way.", 
"'I bet your god would have made Eve without a mouth and taught her how to spread her legs like the magazine that she would never, ever be pretty enough to be in' ~Rudy Francisco, 'Your God'", 
"'We are our father’s sons and daughters but we are not their choices.' ~Daniel Beatty, 'Knock knock'", 
"'I am the subject I know best.' ~Frida Kahlo", 
"'If you’re going to try, go all the way.  There’s nothing like that.' ~Charles Bukowski, 'Roll the Dice'", 
"'Don't you know that only fools are satisfied' ~Billy Joel, 'Vienna'"];
var quote=quotes[Math.floor(Math.random()*quotes.length)];

document.getElementById("quotesection").innerHTML=quote;
}

