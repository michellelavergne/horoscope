document.querySelector('button').addEventListener('click', getHoro)

function getHoro() {
    let month = document.querySelector('#month').value.toLowerCase()
    let day = Number(document.querySelector('#day').value)

// Scorpio
    if ((month === 'october' && day > 23) || (month==='november' && day <= 22)) {
        document.querySelector('#result').innerText = 'Scorpio - You have been waiting for the right time to make some changes, dear Scorpion, and the stars align in 2021 to do just that. The New Year breaks with the sun, Mercury, and Pluto all in Capricorn, while illuminating the sector of your chart that rules thought process and communication. You will be ready to take on a new way of thinking, and to communicate these shifts to others.'
// Aquarius
    }else if((month === 'january' && day > 21) || (month==='february' && day <= 19)) {
    document.querySelector('#result').innerText = 'Aquarius - As January 1 marks yet another revolution around the sun, you may find that you are experiencing a period of personal growth. It is likely you will be a bit burnt out from the holiday season, and will be looking for strategies to reinvest in yourself and evolve.'
// Pisces
    }else if((month === 'february' && day > 20) || (month==='march' && day <= 20)) {
document.querySelector('#result').innerText = 'Pisces - You are the dreamiest sign in the zodiac, lovely Pisces, with an abundance of compassion and kindness. Your ability to intuit other peoples feelings is a gift, but remember that it can be a curse as well, especially when somebody takes advantage of your sweet nature.'
// Aries
    }else if((month === 'march' && day > 21) || (month==='april' && day <= 21)){
document.querySelector('#result').innerText = 'Aries - Welcome to a new year, Aries! The Ram has plenty to look forward to on this great adventure in 2021. On a personal level, there are many twists and turns for your ambitious sign to conquer. There is a ton of firepower sparkling through the skies, especially after your personal planet Mars kept those irons hot and tested you through a great deal during 2020s long yet passionate retrograde phase.'
// Taurus
    }else if((month === 'april' && day > 21) || (month==='may' && day <= 21)){
document.querySelector('#result').innerText = 'Taurus - Welcome to a new year and a totally refreshing new you, Taurus! Your sign has so much to look forward to in 2021. You have been going through some fabulous changes for so long that now is your time to absolutely shine and live your best life. Your sign has been strong and steady even as the world rocked and rolled through last years intense great conjunction cycles occurring between Jupiter, Saturn, and Pluto.'
// Gemini
    }else if((month === 'may' && day > 22) || (month==='june' && day <= 21)) {
        document.querySelector('#result').innerText = 'Gemini - Welcome to a very special year, Gemini. Your sign of the Twins is going into 2021 with a fresh outlook and plenty of brilliant moments. The year opens with your home planet entering the electric sign of Aquarius on January 8, adding to these luminescent energies. Your aura is on point, and all who come in contact with you recognize your glow.'
// Cancer
    }else if ((month === 'june' && day > 22) || (month==='july' && day <= 22)) {
    document.querySelector('#result').innerText = 'Cancer - Welcome to a fabulous new year, Cancer! You are going to experience some massive movement in areas of your life that once felt locked into place. Your sign went through some incredible transitions in 2020 thanks to some very pointed oppositions between Jupiter, Saturn, and Pluto. These major power players met in the sky throughout the year digging at your core and bringing you undeniable experiences that completely shifted your frame of mind during 2020.'
// Leo
    }else if ((month === 'july' && day > 23) || (month==='august' && day <= 23)) {
    document.querySelector('#result').innerText = 'Leo - Prepare for a pivotal year in your life, Leo, as the planets above are shifting your path forever. While 2020 posed many collective challenges, we will see the next stage in our global evolution take place in the year ahead. All Leos will have plenty of reason to celebrate throughout 2021 both in love and career. Peer into what the stars predict for your year ahead!'
// Virgo
    }else if ((month === 'august' && day > 24) || (month==='september' && day <= 23)) {
    document.querySelector('#result').innerText = 'Virgo - Welcome to 2021, Virgo, a year that will shift the path before your feet. You will experience a great deal of growth as you assess where you are now and where you still wish to go. The year ahead will be filled with opportunities for personal growth, health, happiness, love, friendships, and success, so expect to be quite busy! While there may be some challenges, there will still be blessings. Peer into what the stars predict for your year ahead!'
// Libra
    }else if ((month === 'september' && day > 24) || (month==='october' && day <= 23)) {
    document.querySelector('#result').innerText = 'Libra - You will be popular as ever on NYE 2020, and ready to take on 2021 in style! While your friends and family may be struggling with their balance and personal affairs, you will be cool and collected like always. You may also find that your relationship advice is in high demand around the first and second of January, so don not be afraid to share your thoughts on such matters.'
// Sagittarious
    }else if ((month === 'november' && day > 23) || (month==='december' && day <= 21)) {
    document.querySelector('#result').innerText = 'Sagittarious - The beginning of the year will bring unique new ideas to the forefront of your mind, as Saturn and Jupiter take center stage in the sign of Aquarius. These planetary placements will spark fresh thoughts around philosophical concepts such as manifestation, luck, karma, and responsibility.'    
// Capricorn
    }else if ((month === 'december' && day > 22) || (month==='january' && day <= 20)) {
    document.querySelector('#result').innerText = 'Capricorn - You will begin 2021 spending a lot of time in your own head. The sun, Pluto, and Mercury are working together in the sign of Capricorn to help you sort out your thoughts. Themes around identity are bound to come up, and you will likely take deep consideration on how you want to move forward in life, dear Sea Goat. These placements may cause you to be a little hard on yourself, but their energy begins softening on January 8 when Venus enters Capricorn, helping you reconnect with a love of self.'
    }else {
    document.querySelector('#result').innerText = 'Oops! Please enter a valid month and day'
    }

}