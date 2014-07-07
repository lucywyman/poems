function randomquote(){
	var quotes=[
		"&quot;That little girl's not bossy. That little girl has executive leadership skills.&quot; ~Sheryl Sandberg, &quot;So...We leaned in, now what?&quot;",
	"Generally speaking, now is as good a time as any",
	"&quot;Man is least himself when he talks in his own person. Give him a mask, and he will tell you the truth.&quot; ~Oscar Wilde",
	"&quot;Appreciative love gazes and holds it's breath and is silent, rejoices that such a wonder should exist even if not for him, will not be wholly dejected by losing her, would rather have it so than to never have seen her at all&quot; ~ CS Lewis, <i>The four loves</i>",
	"&quot;There is nothing good or bad, but thinking makes it so&quot; ~William Shakespeare, <i>Hamlet</i>",
	"&quot;What is now proved was once only imagin'd&quot; ~William Blake, <i>The Marriage of Heaven and Hell</i>",
	"&quot;The soul of sweet delight can never be defil'd&quot; ~William Blake, <i>The Marriage of Heaven and Hell</i>",
	"&quot;To die by your side is such a heavenly way to die&quot; ~The Smiths, &quot;There is a Light that Never Goes Out&quot;",
	"&quot;Man, unlike any other thing organic or inorganic in the universe, grows beyond his work, walks up the stairs of his concepts, emerges ahead of his accomplishments.&quot; ~John Steinbeck, <i>The Grapes of Wrath</i>",
	"&quot;Every man carries the boulder of what he's done behind him.&quot; ~Max Brooks, <i>World War Z</i>",
	"&quot;Just do you&quot;", 
	"&quot;The greatest trick that the devil ever pulled was convincing women that they look better in their makeup&quot; ~Macklemore, &quot;Thin line&quot;", 
	"&quot;Perfection is the disease of a nation&quot; ~Beyonce Knowles, &quot;Pretty hurts&quot;", 
	"&quot;When you die just know the best time of my life has been loving you&quot; ~Macklemore, &quot;Love song&quot;", 
	"&quot;How can you frighten a man whose hunger is not only in his own cramped stomach but in the wretched bellies of his children? You can't scare him--he has known a fear beyond every other.&quot; ~John Steinbeck, <i>The Grapes of Wrath</i>", 
	"&quot;She asked me if I loved her. I told her it didn’t mean anything but that I didn’t think so.&quot; ~Albert Camus, <i>The Stranger</i>", 
	"&quot;We pursue love because it is perfect.  It’s only the people who are flawed.&quot;", 
	"&quot;If it was understandable, they wouldn’t call it love.&quot;", 
	"&quot;I love you when I'm writing this, is my point, and I suppose, in a way, that’s all that anyone can promise, isn't it? I love you right now. Beautiful, in a way.&quot;", 
	"&quot;I bet your god would have made Eve without a mouth and taught her how to spread her legs like the magazine that she would never, ever be pretty enough to be in&quot; ~Rudy Francisco, &quot;Your God&quot;", 
	"&quot;We are our father’s sons and daughters but we are not their choices.&quot; ~Daniel Beatty, &quot;Knock knock&quot;", 
	"&quot;I am the subject I know best.&quot; ~Frida Kahlo", 
	"&quot;If you’re going to try, go all the way.  There’s nothing like that.&quot; ~Charles Bukowski, &quot;Roll the Dice&quot;", 
	"&quot;Don't you know that only fools are satisfied&quot; ~Billy Joel, &quot;Vienna&quot;",
	"&quot;When I dropped him, I shattered.  Translation: No man has pleased me since.&quot; ~Haley Mosley, &quot;Boyfriend Interview&quot;",
	"&quot;Loving you was the last thing I felt really good at.&quot; ~Rudy Francisco, &quot;Scars&quot;", 
	"&quot;When I wanna be a superhero I just wake up.&quot; ~Childish Gambino, &quot;Not going back&quot;"];
	var quote=quotes[Math.floor(Math.random()*quotes.length)];

	document.getElementById("quotesection").innerHTML=quote;
}

