function randomquote(){
	var quotes=[
		"&#34;That little girl's not bossy. That little girl has executive leadership skills.&#34; ~Sheryl Sandberg, &#34;So...We leaned in, now what?&#34;",
	"Generally speaking, now is as good a time as any",
	"&#34;Man is least himself when he talks in his own person. Give him a mask, and he will tell you the truth.&#34; ~Oscar Wilde",
	"&#34;Appreciative love gazes and holds it's breath and is silent, rejoices that such a wonder should exist even if not for him, will not be wholly dejected by losing her, would rather have it so than to never have seen her at all&#34; ~ CS Lewis, <i>The four loves</i>",
	"&#34;There is nothing good or bad, but thinking makes it so&#34; ~William Shakespeare, <i>Hamlet</i>",
	"&#34;What is now proved was once only imagin'd&#34; ~William Blake, <i>The Marriage of Heaven and Hell</i>",
	"&#34;The soul of sweet delight can never be defil'd&#34; ~William Blake, <i>The Marriage of Heaven and Hell</i>",
	"&#34;To die by your side is such a heavenly way to die&#34; ~The Smiths, &#34;There is a Light that Never Goes Out&#34;",
	"&#34;Man, unlike any other thing organic or inorganic in the universe, grows beyond his work, walks up the stairs of his concepts, emerges ahead of his accomplishments.&#34; ~John Steinbeck, <i>The Grapes of Wrath</i>",
	"&#34;Every man carries the boulder of what he's done behind him.&#34; ~Max Brooks, <i>World War Z</i>",
	"&#34;Just do you&#34;", 
	"&#34;The greatest trick that the devil ever pulled was convincing women that they look better in their makeup&#34; ~Macklemore, &#34;Thin line&#34;", 
	"&#34;Perfection is the disease of a nation&#34; ~Beyonce Knowles, &#34;Pretty hurts&#34;", 
	"&#34;When you die just know the best time of my life has been loving you&#34; ~Macklemore, &#34;Love song&#34;", 
	"&#34;How can you frighten a man whose hunger is not only in his own cramped stomach but in the wretched bellies of his children? You can't scare him--he has known a fear beyond every other.&#34; ~John Steinbeck, <i>The Grapes of Wrath</i>", 
	"&#34;She asked me if I loved her. I told her it didn’t mean anything but that I didn’t think so.&#34; ~Albert Camus, <i>The Stranger</i>", 
	"&#34;We pursue love because it is perfect.  It’s only the people who are flawed.&#34;", 
	"&#34;If it was understandable, they wouldn’t call it love.&#34;", 
	"&#34;I love you when I'm writing this, is my point, and I suppose, in a way, that’s all that anyone can promise, isn't it? I love you right now. Beautiful, in a way.&#34;", 
	"&#34;I bet your god would have made Eve without a mouth and taught her how to spread her legs like the magazine that she would never, ever be pretty enough to be in&#34; ~Rudy Francisco, &#34;Your God&#34;", 
	"&#34;We are our father’s sons and daughters but we are not their choices.&#34; ~Daniel Beatty, &#34;Knock knock&#34;", 
	"&#34;I am the subject I know best.&#34; ~Frida Kahlo", 
	"&#34;If you’re going to try, go all the way.  There’s nothing like that.&#34; ~Charles Bukowski, &#34;Roll the Dice&#34;", 
	"&#34;Don't you know that only fools are satisfied&#34; ~Billy Joel, &#34;Vienna&#34;"
	"&#34;When I dropped him, I shattered.  Translation: No man has pleased me since.&#34; ~Haley Mosley, &#34;Boyfriend Interview&#34;",
	"&#34;Loving you was the last thing I felt really good at.&#34; ~Rudy Francisco, &#34;Scars&#34;", 
	"&#34;When I wanna be a superhero I just wake up.&#34; ~Childish Gambino, &#34;Not going back&#34;"];
	var quote=quotes[Math.floor(Math.random()*quotes.length)];

	document.getElementById("quotesection").innerHTML=quote;
}

