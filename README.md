# Burgerverse - NFT project
---
## Burgerverse
Burgerverse is an NFT collection I tried to launch with a couple of friends (see the [Post mortem](#project-post-mortem-(sort-of))). The elevator pitch is: We are an interdimensional burgershop, located on an asteroid floating near the most popular crossroads in the universe. Our job is to satisfy the burger cravings of beings from every corner of the universe.
## Overview
This repository contains the code I wrote while working on Burgerverse. The repository consists of two folders: website and generator. 
The website folder includes the source code for the project landing page made using Gatsby.js and deployed with AWS Amplify. You can find the website at https://www.brgrvrs.com/ .
The generator folder includes the source code for a python script whose purpose is to combine individual image assets into ready to go images of burgers. See the [Image generator section](#image-generator). 
Besides it's original purpose I used this readme for a write-up of some thoughts that gathered up while working on the project.
## Running locally
`$ git clone`
### Landing page
`$ cd website`
`$ npm install`
`$ yarn start`
### Image generator
See [the image generator section](#the-image-generator) for details
`$ cd generator/src`
`$ python main.py`

## My take on the crypto world
Before anything else, I have a bit of a disclaimer to make. There is no part of the blockchain world, be it a technological or political area, I believe in or have an appreciation for (well I maybe appreciate a couple of things, but for the better part of it I'm not impressed).
I'll try to sum up some of my thoughts, but for a more detailed analysis, I highly resonate with, I'd like to point you to a great series of [blog posts](https://blog.mollywhite.net/blockchain/) by [Molly White](https://blog.mollywhite.net/).

When people talk about blockchain they usually mean one of two things: the blockchain (and related) technology and the blockchain "ideology".

The core idea of blockchain as a technology is fairly simple: an immutable, distributed ledger plus a concensus algorithm for keeping it up to date (mining). It's a data structure used to implement distributed systems. I don't dispute the validity of blockchain technology in those terms, but...  
Distributed systems are a well researched and active area, and many data structures and algorithms were developed for their implementation. But for the web3 folks the blockchain is the only one that matters; never mind the domain it is applied to, the scalability issues or pollution implications. Web3 applications are complex and are ofter developed with new, unstable APIs and even programming languages (Solidity for Ethereum).

Now for the ideology part. I can't believe how much, for a lack of a better word, hype has formed around a linked list with extra steps. The amount of financial and emotional investment in this space is mind boggling. People all over the internet hail the blockchain as the holy grail of a yet to come, decentralized and free society.

Except that blockchain isn't even able to serve its original purpose: currency. No sane person would convert their life savings into cryptocurreny, no store will accept them and I would **never** accept getting paid in crypto. Because they are volatile as f***. They jump up and down like crazy, every day you could wake up poor. In my mind that's a big no no for anything claiming to be a currency (except for the times of crysis, but those should be relatively rare and even then it's inflation or deflation not a mix of both). 
The conventional currencies (*fiats* ungh!) solve this problem with banks. In fact someone should probably explain to the crypto folks that the primary purpose of banks is not surveillance or stealing the hard earned cash of their customers come WW3. Their purpose lies in handling the high levels of complexity which come up when money and free markets are involved. 
Since the core idea of cryptocurrencies relies on surpassing a third party intermediary (a bank) when performing a transaction they have to rely on a technological solution (algorithm) to solve the problem of their volatility. As far as I can see they are not making progress. And why would they, since the whole of their value is currently speculative?

Another popular blockchain use case are non-fungible tokens, NFTs abbreviated. NFTs are a mechanism for claiming ownership of a resource (digital or physical) stored as an entry on a blockchain. By far the most widespread use of NFTs is in the area of digital art collection so this is the aspect I will focus on.
People involved in this bussiness claim that NFT art marketplaces are a one-to-one analogon of their physical counterparts. To see why this is not the case let's figure out where the value of a physical art piece comes from (a simplified reasoning I constructed, it does not necessarily have to be valid but I want to give it a try).
1. The art piece has an estetic value
2. The art piece is unique - meaning it is hard (or impossible) to create an exact copy
3. As a consequence of 1) many people want the art piece (high demand)
4. As a consequence of 2) only one party can own the art piece (low supply)

The value of an art piece now comes from points 3. and 4. - high demand and low supply.
Let us now contrast that with a digital art piece powered by an NFT. Point 1 (estetic value) holds - there are many pieces of great digital art, Burgerverse burgers being one of them. Point 3 (high demand) could still be a consequence of point 1. Point 2 (uniqueness) is where things start to break down. It is not the actual art piece that is unique (in a sense that it is hard to replicate), but rather an entry in a blockchain referencing the art piece via a URI. The art piece can be easily downloaded from the URI, every single person owning a computer or a smartphone can have it. So point 4 (low supply) now only holds for entries in a blockchain (and those have no estetic value if you ask me, so there goes point 1). But we were talking about marketplaces for **digital art** not blockchain tokens. As far as I am concerned **Q.E.D**.
All of this is of course not obvious to the masses of people involved in the NFT trading bussiness. They believe the *new era art collection* shenanigans, hence the apsurd amounts of money involved.

I could go on, but this is enough ranting for a Github readme. This whole section consists of my personal beliefs, aquired in various ways. I am by no means an expert in this field and there is a chance I am wrong, if for no other reason then because I tried to be concise. I am always open for discussion.
## Why I collaborated on an NFT project?
Given the last section my motivation for joining an NFT project calls for some explanation. My motivation was twofold: the possibility of earning serious money and an opportunity to work in a team.

Let me cover the money aspect first. At the time I first started hearing more about NFTs (October 2021.) it was story after story of people in my city of Zagreb making money off NFT projects. It was not some abstract people on the internet it was happening to, it was people I knew personally. I am usually categorically opposed to any form of a *get-rich-quick* scheme. But the NFT bussiness seemed a bit different. The amount of work that goes into a collection launch is not small, it's the payoff that's apsurdly disproportional and I justified that by the connection to the crypto world - any amount of money involved in crypto is usually apsurdly large. My stance on crypto then was pretty much the same as it is now. I made a decision to disregard my views in sake of making money - not my proudest moment. But then again, who doesn't want to be rich at twenty. And there was a bunch of NFT projects coming any way, the only difference would be us making some money vs making none, we were going to do some good things with the money, [insert some more generic rationalisations for this type of reasoning]. I still feel a bit bad about this, but the experience was definetley a positive one so I regret nothing.

The opportunity to work in a team is where I really made up my mind though. Up until this point every project I made simply looked bad because of my lack of designer skills (and those got only slightly better by reading some of those *design for developers* type books). The part of my projects I find nice is the code (at least I try to write nice code), but it's hard to show some source code to your mom and expect her to be proud.
That's why I was so excited to work on this project. I would be working with two artists and a web designer. The whole thing screamed it was going to be beautiful from the start - and looking back I really like how the landing page turned out as well as the burger art our artists produced.

The project was also interesting in terms of software development. It was a chance to practice my web development skills in a production environment, something I have not done in the past. I was very excited about writing the image generator program because my college courses just covered a bunch of concepts relevant for its implementation. Working with the web3 stack was not something I was necesarrily looking forward to, but there were some nice problems to solve in that domain too.
## Project post mortem
We started talking about launching an NFT project in October of 2021. Our team consisted of four people: 
- Jan ~ artist - images of burgers that would make the collection
- Ian ~ artist - art for the promotional materials: landing page, instagram posts...
- Larisa ~ web design and marketing
- Marko (me) ~ software developer

The focus in the first month was on theme brainstorming and a bunch of research, since none of us were faimiliar with the NFT world. At the end of that first month the situation was roughly as follows: 
- we settled on the idea of Burgerverse;
- Many existing, sold out projects, were collections of art we agreed didn't look too well. By making our art and story stand out, we thought we could have a competitive advantage
- Marketing would clearly be a large success factor. We inferred from other successful projects that a short marketing campaing (two weeks to a month) would be sufficient.
- Most NFT projects have an active Discord community, it was obvious we would need one too. It was agreed that Larisa would be in charge of running the Discord.
- The landing page had to be developed ASAP in order to start the marketing
- The collection would be launched through the OpenSea marketplace on the Ethereum blockchain
- We set the launch date for the beginning of February 2022.

While Larisa was working on the first landing page design, I was writing the image generator. Jan was drawing burger assets consistently until the end of the project. Ian started working on a 3d model of our imaginary burger shop.

The landing page development took longer than expected, it was finished in the second half of December. This was because we made a bunch of iterations, we all had college duties to fulfill and I had some cross browser compatibility issues as well as other bugs to solve (some of those are covered in the [website](#website) section).
At that point no blockchain code was written although I've done quite a bit of research. At the same time a bunch of NFT collections have been released, and many more kept coming thus making the market more and more competitive. 
This was when we started having disagreements about the launch date. Ian and Larisa wanted to keep the launch date at the beginning of February reasoning that we would have a greater chance of success given the mass of upcoming projects. I argued we should postpone the launch out of concern for code quality, mainly because I was new to web3 development, money was involved and patching bugs in a blockchain environment did not seem like fun.

Around that time was when Larisa started doing social media marketing. The expectation was that we would steadily aquire community members with each day of campaign, reaching the critical mass of followers right around the launch date in February. We failed to do so, having only a couple of hundred followers on instagram after two weeks of marketing (some of them were bots and some of them were friends). This lack of buying customers resolved our launch date conflict, it was clear we had to regroup.

We are now at the second half of January 2022. A friend of Ian's Andrej, who does crypto and NFT trading, offered us some consulting services. Taking Andrej's advice into account the following decisions were made:
- We were to launch one or two cheap (or even free) collections, to make a name for ourselves
- The money and followers aquired with the smaller projects would be channeled into Burgerverse
- We were to use a [third party service](https://www.launchmynft.io/) for blockchain integration and art generation

As a consequence of the third point there was no more significant contribution I could do for the project. I attended a few more meetings and we agreed I would no longer actively participate. If there was a need for developer services, e.g. launching a discord bot, I would step in. As far as I know the team is still working on Burgerverse and related projects. I stopped participating in the project in the second half of February.
## The landing page
I've already argued the use of Gatsby.js in one of my [repositories](https://github.com/MarkoVlaic/karate-landing-page#why-gatsby) so I'll point you there if you want to read about it, in order to keep things DRY.

The content for the landing page is sourced through DatoCMS. I regret this decision because Dato is not open source and because I have to share an access token (a read only one, but still it seems dirty) in order to provide the option of running locally for strangers.

When it comes to design I think the landing page looks really nice. I'd say most of the source code is also fine BUT...

First of all the website looks way worse in safari than any other browser. The video in the heading is exported in a format not supported by safari because we needed it to have a transparent background. So we just display a hero image instead.

In the mobile version some components display a little arrow indicating that the component can be expanded. This is achieved with approach similar to the one in the code snippet below. You can find a real example in `src/components/sections/FAQ/faq.module.css`.
```css
.collapsible.collapsed::after {
    content: ">",
    transform: rotate(90deg), scale(var(--factor))
}
```
But these transforms don't work in safari, even with the addition of vendor prefixes, so they are just not shown. I am still confused as to why that is.
Speaking of collapsible elements would you like to know how I animate them? By setting a `transition` on the `max-height` property. I know it's bad for performance. I did it anyway. Why? Because at the time I didn't have the time to implement the right [solution](https://developer.chrome.com/blog/performant-expand-and-collapse/) and I promised to myself I'd do it later.

Another issue I had was positioning the asteroids and nebula effects you can see scattered across the page. Specifically keeping them at the right relative position to the other elements near them when the screen size changes.
The first approach I tried was positioning every image relative to a section it should be close to. Each image was styled separetely. This resulted in a lot of code repetition and a bunch of components being cluttered with `<Rock />` components. Since many of those images overflow their containers they were not displayed properly in... you guessed it - safari, because it doesn't allow certain combinations of `overflow-x` and `overflow-y`.
The second approach uses an `<ImagePlacer />` component for both the asteroids and the nebulas, one for each. Each `<ImagePlacer />` component stretches the whole width and height of the `body` and is positioned in it's top left corner, with a lower `z-index`. The absolute image positions in respect to their `<ImagePlacer />`, are stored in a json file and applied programmaticaly at build time. This is better in terms of code repetition, but a bunch of `@media` queries are still required for things to look nice. I did not find a better solution in the meantime. 
## The image generator
NFT collections usually consist of a large number of images generated programatically from a set of assets divided into categories. In case of the Burgerverse burgers the categories are: buns, patties, two categories of toppings (top and bottom) and optional decorations on top of the bun. Example assets provided in this repository in the `generator/assets` folder are for cute sea creatures and are divided into three categories: bases, eyes and mouths.
Additionally each asset has a rarity property which determines how often it occurs in the collection.
The task of the image generator program is to generate images for a collection of a given size with respect to the rarities of each asset.

Since we abandoned my solution for a third party service some parts of the generator remain unfinished. I've adapted the implementation to a form more suitable for benchmarking a couple of approaches. I will describe the solution on a conceptual level (the method) and then I'll discuss and compare two implementations of that solutions.

### The method
The input to the program is a folder containing subfolders which map to categories of assets. Eeach subfolder contains image files representing individual assets. Beside that an input file is provided, describing the order of categories, as well as probability distributions for assets in each category (rarity). The output of the program is a folder containing the assembled image files.
Each image in the result is a combination of images from each category (one asset per category) layered on top of each other. On a conceptual level we can think of generating all possible resulting combination and then filtering them out according to the rarity constraints.

The way we achieve this is by encoding each possible combination with an n-tuple according to the following rules. Let `C` be the number of categories and let `N_i` be the number of assets in the i-th category, `0 <= i < C`. A combination of items is represented with a C-tuple of the form `(i_1, i_2, ..., i_C)`, `0 <= i_j < N_i for j in 0..C`.  Element `i_j` of the C-tuple represents an index of an asset in the j-th category.
We derive the `C` and `N_i` parameters from the input folder, and the order of elements in the tuple from the configuration file. The order in the tuple matters because assets with a lower index (in the tuple) are layered into the resulting image before those with a higher image. We then loop over all such combinations using a simple (and nice) combinatorial algorithm described in the [implementation](#implementation) section, and construct a resulting image for each combination. This way we will generate `N_1 * N_2 * ... * N_C` images.

After all the combinations are generated we have to select a random subset while respecting the probability distributions of assets in each category. To achieve this we can think of the index of an asset in each category as a random variable. Each combination then can be seen as a random vector of dimension `C`. We can then compute the probability of each combination (vector) as a joint probability of uncorrelated random variables.
Let `p_k_i` be the probability of appereance of asset with index `i` from the category with index `k`, `p_k_1 + p_k_2 + ... + p_k_Nk = 1`. The probability of combination  `(i_1, i_2, ..., i_C)` appearing in the end result is then given by `p_1_i1 * p_2_i2 * ... * p_C_iC`. If we have to generate a subset of `S` items we simply choose `S` combinations randomly, respecting the calculated probabilities for each of them.

### The implementation
The generator program is written in python. The images are assembled together using the [PIL](https://pillow.readthedocs.io/en/stable/) library.
All of the parameters are currently hard coded, and can be found in `main.py`. I plan on providing simple CMD options soon.

The first implemented version of the algorithm was a naive, sequential implementation. Loop over all combination codes (tuples) represented as arrays, for each of them compose an output image from asset images and then output it to the destination folder. This flow is visually depicted in the diagram below.

[![](https://mermaid.ink/img/pako:eNpdTstqAzEM_BWhQ0_JD-yhl_RBoVBI6Wmdg2rLG4MtLY5MKSH_Xu8muVSX0WhGI53Ra2AcMGb98UeqBu97J9Arag5cxzeZm8HLSg7wAF4lpmncrQAxZT7AdvsIEwtXMq1dKt9JyJIKvN6nV5PXMutpSS00Mexu9Cpqs35q_FgBviTZv2TcYOFaKIX-8Hn50qEdubDDobeBI7VsDp1curXNgYyfQ1o2h0j5xBukZvr5Kx4Hq43vpqdEU6Vyc13-AEgbYMY)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNpdTstqAzEM_BWhQ0_JD-yhl_RBoVBI6Wmdg2rLG4MtLY5MKSH_Xu8muVSX0WhGI53Ra2AcMGb98UeqBu97J9Arag5cxzeZm8HLSg7wAF4lpmncrQAxZT7AdvsIEwtXMq1dKt9JyJIKvN6nV5PXMutpSS00Mexu9Cpqs35q_FgBviTZv2TcYOFaKIX-8Hn50qEdubDDobeBI7VsDp1curXNgYyfQ1o2h0j5xBukZvr5Kx4Hq43vpqdEU6Vyc13-AEgbYMY)

The algorithm for generating all the combination codes is so nice and simple I have to include it here.

```python
def generate_combinations(self, imagesPerCategory):
    if len(imagesPerCategory) == 0:
      yield []
      return
    
    for i in range(imagesPerCategory[0]):
      for subcombination in self.generate_combinations(imagesPerCategory[1:]):
        yield [i] + subcombination
```

`imagesPerCategory` is an array in which `imagesPerCategory[i]` equals the number of images in the i-th category. The algorithm is recursive and it is best described on an example. 
Let's say `imagesPerCategory = [1, 2, 3]`. The possible combinations are `c1= [[0, 0, 0], [0, 0, 1], [0, 0, 2], [0, 1, 0], [0, 1, 1], [0, 1, 2]]`.
Now examine the case when `imagesPerCategory = [2, 3]`. The possible combinations are `c2=[[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1,2]]`-
Now notice that we can write `c1` as `c1 = [ [0] + subcomb for subcomb in c2]`. This principle holds no matter the size of the `imagesPerCategory` array. The use of python generators makes the implementation super short and elegant.

Image composition is also simply done because the `PIL.Image` class provides the `Image.alpha_composite(bottom_image, top_image)` function which blends the `top_image` on top of the `bottom_image` respecting their alpha values. The function for composing an image for a single combination is also short and simple so I will include it here.

```python
from PIL import Image
def compose(combination):
    generatedImage = None
    for i in range(len(combination)):
      curImage = categories[i].get_image(combination[i])

      if generatedImage is None:
        generatedImage = curImage
        continue
      generatedImage = Image.alpha_composite(generatedImage, curImage)

    return generatedImage
```

The problem with this implementation is that it is slow for large inputs. Before tackling the obvious bottleneck - file output, I will discuss a little optimization that could help when the number of categories is large with a large number of assets in each of them.

The described algorithm for combination codes generates them in lexicographical order, that is: `[0, 0, ... , 0, 0], [0, 0, ..., 0, 1], ..., [0, 0, ..., 0, N_C ], [0, 0, ..., 1, 0], ..., [0, 0, ..., 1, N_C] ...` you get the picture. The combination in each step of the iteration differs from the last one in `k` last places, and for a large number of iterations the `k` will be significantly smaller than the maximum number of categories `C`, for example `k = 1 or k = 2`. When processing each combination we can cache the intermediate images for each index of the tuple. In the next iteration, instead of building the image from the beginning, we can start building it from the `(C-k)`-th place. That way we save some time on the relatively expensive image composition operations.
The code for this kind of composition can be found in `src/composers/CachedComposer.py`.

The second implementation tackles the problem of file IO. Obviously performing expensive IO operations in each iteration of the process is not optimal. Pythons built in `ThreadPoolExecutor` is used to perform those operations in a separate thread. This implementation leads to a significant speed up (I am yet to measure it exactly).
The new flow can now be thought of in terms of the following diagram. 

[![](https://mermaid.ink/img/pako:eNpNkEtrwzAMgP-K8GFs0AbaYw67dA8GZRvdbkkOqi0nBtsKjs0Ypf99zotVF1mfPiTki5CsSJRCW_6RHYYIx1PtIYdmqyhUb75PEV6mooE7kOy1aavDlEAbSw1st4_QkqeAkUNuubPxGA17eF3pLEl2PQ_jVIctwWEp5yanmFfNy4d0bgP23QKrjynBdxcIFXwy22YWx1AmkJzWnY7_NO7uF333cEP3K93f0KIobhS_Ku-LQl6JjXAUHBqVP-sy4lrEjhzVosxPRRqTjbWo_TWrqVcY6VmZfLkoNdqBNgJT5K9fL0UZQ6JVejKYL3WLdf0Dq9aBxQ)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNpNkEtrwzAMgP-K8GFs0AbaYw67dA8GZRvdbkkOqi0nBtsKjs0Ypf99zotVF1mfPiTki5CsSJRCW_6RHYYIx1PtIYdmqyhUb75PEV6mooE7kOy1aavDlEAbSw1st4_QkqeAkUNuubPxGA17eF3pLEl2PQ_jVIctwWEp5yanmFfNy4d0bgP23QKrjynBdxcIFXwy22YWx1AmkJzWnY7_NO7uF333cEP3K93f0KIobhS_Ku-LQl6JjXAUHBqVP-sy4lrEjhzVosxPRRqTjbWo_TWrqVcY6VmZfLkoNdqBNgJT5K9fL0UZQ6JVejKYL3WLdf0Dq9aBxQ)

I wanted to preserve both the first and second implementation for the purposes of benchmarking (which I am yet to do). This led me to a bit of an overcomplicated architecture. The `Runner.py` class deals with reading the configuration file and the input folder. Classes in the `composers` directory implement different methods of image composition described above. Classes in the `executors` folder implement the naive and concurrent approach to file IO.

At the time of writing the generator I was not familiar with the concepts of multithreaded programming. Since then we've covered a bunch of the relevant concepts in the [Introduction to operating systems](https://www.fer.unizg.hr/predmet/opsus_a) course at [FER](https://www.fer.unizg.hr/) so I'd like to implement a solution with two bounded buffers, as shown in the diagram below.

[![](https://mermaid.ink/img/pako:eNqFkcFOhDAURX_lpQtXMySwZOFidJyYGBfqDliU9hWaQEtKGzWEf7cwrU2chWx43Ht4nIaFMM2RlEQM-pP11Fh4eauV0ANHUz2ryVl42h8auAOmlZBd9bDfQMgBGzge76FDhYZabXw1tlJRK7WCS0wb2Km2zZflpJ3iyOHkhEAD-bruHdPjpGc0cyCLG7IIJH4hc37pDLUCf82u7Qyd-rRik9gn-OgNUj43V5JLg2w32464JSxPbB4oVqSsiG9WWZbFXqX-NWSo-HX4o_TrWp3D9K8S5omNSlikLCp5ofjtVN74kAMZ0YxUcv-Lly2rie1xxJqUfuQoqBtsTWq1etRNnFo8c-l3kVLQYcYDoX7z-7dipLTGYYQeJfVHHAO1_gBl3MIS)](https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNqFkcFOhDAURX_lpQtXMySwZOFidJyYGBfqDliU9hWaQEtKGzWEf7cwrU2chWx43Ht4nIaFMM2RlEQM-pP11Fh4eauV0ANHUz2ryVl42h8auAOmlZBd9bDfQMgBGzge76FDhYZabXw1tlJRK7WCS0wb2Km2zZflpJ3iyOHkhEAD-bruHdPjpGc0cyCLG7IIJH4hc37pDLUCf82u7Qyd-rRik9gn-OgNUj43V5JLg2w32464JSxPbB4oVqSsiG9WWZbFXqX-NWSo-HX4o_TrWp3D9K8S5omNSlikLCp5ofjtVN74kAMZ0YxUcv-Lly2rie1xxJqUfuQoqBtsTWq1etRNnFo8c-l3kVLQYcYDoX7z-7dipLTGYYQeJfVHHAO1_gBl3MIS)

Although I implemented most of the logic for the rarity based filtration, I did not yet integrate it with the rest of the project. I also plan to do that some time. The code can be found in `CombinationFilter.py`. The idea is not to first generate all of the combinations and then filter them out, since the maximum number of combination can be quite large. Instead the `CombinationFilter.py` should serve as a combination generator that generates only a limited subset of combinations. 

