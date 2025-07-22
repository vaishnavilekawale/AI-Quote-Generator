const quotes = {
  inspirational: [
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text:"Believe you can and you're halfway there." , author: "Theodore Roosevelt"},
    { text:"Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill"},
    { text:"Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson"},
    { text:"Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe"},
    { text:"Dream big and dare to fail.",  author: "Norman Vaughan"},
    { text:"The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown"},
    { text:"Push yourself, because no one else is going to do it for you.", author: "Unknown"},
    { text:"Great things never come from comfort zones.", author: "Unknown"},
    { text:"Don't stop when you're tired. Stop when you're done.", author: "Unknown"},
    { text:"Everything you’ve ever wanted is on the other side of fear.", author: "George Addair"}
  ],
  happy: [
    { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    { text: "For every minute you are angry you lose sixty seconds of happiness.", author: "Ralph Waldo Emerson" },
    { text: "Let us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom.", author:  "Marcel Proust" },
    { text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama"},
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama"},
    { text: "Happiness depends upon ourselves.", author: "Aristotle"},
    { text: "For every minute you are angry you lose sixty seconds of happiness.", author:"Ralph Waldo Emerson" },
    { text: "Happiness is when what you think, what you say, and what you do are in harmony.", author: "Mahatma Gandhi" },
    { text: "Count your age by friends, not years. Count your life by smiles, not tears.", author:"John Lennon" },
    { text: "The most important thing is to enjoy your life—to be happy—it’s all that matters.", author: "Audrey Hepburn" },
    { text: "A day without laughter is a day wasted.", author: "Charlie Chaplin" },
    { text: "Happiness is only real when shared.", author: "Christopher McCandless" }
  ],
  sad: [
    { text: "Tears come from the heart and not from the brain.", author: "Leonardo da Vinci" },
    { text: "Every human walks around with a certain kind of sadness.", author: "Brad Pitt" },
    { text: "Tears come from the heart and not from the brain." , author: "Leonardo da Vinci"},
    { text: "Heavy hearts, like heavy clouds in the sky, are best relieved by the letting of a little water." , author: "Christopher Morley"},
    { text: "The word 'happy' would lose its meaning if it were not balanced by sadness." , author: "Carl Jung"},
    { text: "Behind every sweet smile, there is a bitter sadness that no one can ever see and feel." , author: "Tupac Shakur"},
    { text: "Every human walks around with a certain kind of sadness." , author: "Brad Pitt"},
    { text: "The saddest thing about love is that not only that it cannot last forever, but that heartbreak is soon forgotten." , author: "William Faulkner"},
    { text: "When you are happy, you enjoy the music. But when you are sad, you understand the lyrics." , author: "Frank Ocean"},
    { text: "Sadness flies away on the wings of time." , author: "Jean de La Fontaine"},
    { text: "It's amazing how someone can break your heart and you can still love them with all the little pieces." , author: "Ella Harper"},
    { text: "The walls we build around us to keep sadness out also keep out the joy." , author: "Jim Rohn"}
  ],
  motivational: [
    { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
    { text: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
    { text:"Push yourself, because no one else is going to do it for you." , author: "Unknown"},
    { text:"Success doesn’t just find you. You have to go out and get it." , author: "Unknown"},
    { text:"Do something today that your future self will thank you for." , author: "Sean Patrick Flanery"},
    { text:"Don’t wait for opportunity. Create it." , author: "George Bernard Shaw"},
    { text:"Your limitation—it's only your imagination." , author: "Unknown"},
    { text:"Great things never come from comfort zones." , author: "Ginni Rometty"},
    { text:"Work hard in silence, let your success make the noise." , author: "Frank Ocean"},
    { text:"Doubt kills more dreams than failure ever will." , author: "Suzy Kassem"},
    { text:"Believe in yourself and all that you are." , author: "Christian D. Larson"},
    { text:"If you can dream it, you can do it." , author: "Walt Disney"}
  ]
};

function generateQuote() {
  const mood = document.getElementById("mood").value;
  const quoteData = quotes[mood];
  const randomIndex = Math.floor(Math.random() * quoteData.length);
  const quote = quoteData[randomIndex];

  document.getElementById("quoteText").innerText = `"${quote.text}"`;
  document.getElementById("authorText").innerText = `- ${quote.author}`;
}



