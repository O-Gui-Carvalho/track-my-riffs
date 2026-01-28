import { Band, Music, MusicStatus } from "@/types/music";

export const bands: Band[] = [
    { id: 1, name: "Audioslave" },
    { id: 2, name: "Alice in Chains" },
    { id: 3, name: "Soundgarden" },
    { id: 4, name: "Nirvana" },
    { id: 5, name: "Pearl Jam" },
    { id: 6, name: "Black Sabbath" },
    { id: 7, name: "Ozzy Osbourne" },
    { id: 8, name: "Jimi Hendrix" },
    { id: 9, name: "The Beatles" },
    { id: 10, name: "Linkin Park" },
    { id: 11, name: "Red Hot Chili Peppers" },
    { id: 12, name: "Slipknot" },
    { id: 13, name: "Arctic Monkeys" },
    { id: 14, name: "Metallica" },
    { id: 15, name: "Oasis" },
];

export const musics: Music[] = [
    // Audioslave
    { id: 1, title: "Like a Stone", bandId: 1, status: MusicStatus.APRENDENDO },
    { id: 2, title: "I Am the Highway", bandId: 1, status: MusicStatus.APRENDENDO },
    { id: 3, title: "Doesn’t Remind Me", bandId: 1, status: MusicStatus.APRENDENDO },
    { id: 4, title: "Be Yourself", bandId: 1, status: MusicStatus.APRENDENDO },
    { id: 5, title: "Show Me How to Live", bandId: 1, status: MusicStatus.APRENDENDO },

    // Alice in Chains
    { id: 6, title: "Nutshell", bandId: 2, status: MusicStatus.APRENDENDO },
    { id: 7, title: "Down in a Hole", bandId: 2, status: MusicStatus.APRENDENDO },
    { id: 8, title: "No Excuses", bandId: 2, status: MusicStatus.APRENDENDO },
    { id: 9, title: "Got Me Wrong", bandId: 2, status: MusicStatus.APRENDENDO },
    { id: 10, title: "Heaven Beside You", bandId: 2, status: MusicStatus.APRENDENDO },

    // Soundgarden
    { id: 11, title: "Black Hole Sun", bandId: 3, status: MusicStatus.APRENDENDO },
    { id: 12, title: "Blow Up the Outside World", bandId: 3, status: MusicStatus.APRENDENDO },
    { id: 13, title: "Fell On Black Days", bandId: 3, status: MusicStatus.APRENDENDO },
    { id: 14, title: "Burden in My Hand", bandId: 3, status: MusicStatus.APRENDENDO },
    { id: 15, title: "Pretty Noose", bandId: 3, status: MusicStatus.APRENDENDO },

    // Nirvana
    { id: 16, title: "Come As You Are", bandId: 4, status: MusicStatus.APRENDENDO },
    { id: 17, title: "About a Girl", bandId: 4, status: MusicStatus.APRENDENDO },
    { id: 18, title: "Polly", bandId: 4, status: MusicStatus.APRENDENDO },
    { id: 19, title: "Lithium", bandId: 4, status: MusicStatus.APRENDENDO },
    { id: 20, title: "In Bloom", bandId: 4, status: MusicStatus.APRENDENDO },

    // Pearl Jam
    { id: 21, title: "Last Kiss", bandId: 5, status: MusicStatus.APRENDENDO },
    { id: 22, title: "Elderly Woman Behind the Counter in a Small Town", bandId: 5, status: MusicStatus.APRENDENDO },
    { id: 23, title: "Better Man", bandId: 5, status: MusicStatus.APRENDENDO },
    { id: 24, title: "Release", bandId: 5, status: MusicStatus.APRENDENDO },
    { id: 25, title: "Immortality", bandId: 5, status: MusicStatus.APRENDENDO },

    // Black Sabbath
    { id: 26, title: "Paranoid", bandId: 6, status: MusicStatus.APRENDENDO },
    { id: 27, title: "Iron Man", bandId: 6, status: MusicStatus.APRENDENDO },
    { id: 28, title: "N.I.B.", bandId: 6, status: MusicStatus.APRENDENDO },
    { id: 29, title: "War Pigs", bandId: 6, status: MusicStatus.APRENDENDO },
    { id: 30, title: "Children of the Grave", bandId: 6, status: MusicStatus.APRENDENDO },

    // Ozzy Osbourne
    { id: 31, title: "Mama, I’m Coming Home", bandId: 7, status: MusicStatus.APRENDENDO },
    { id: 32, title: "Dreamer", bandId: 7, status: MusicStatus.APRENDENDO },
    { id: 33, title: "Crazy Train", bandId: 7, status: MusicStatus.APRENDENDO },
    { id: 34, title: "Goodbye to Romance", bandId: 7, status: MusicStatus.APRENDENDO },
    { id: 35, title: "Mr. Crowley", bandId: 7, status: MusicStatus.APRENDENDO },

    // Jimi Hendrix
    { id: 36, title: "Hey Joe", bandId: 8, status: MusicStatus.APRENDENDO },
    { id: 37, title: "The Wind Cries Mary", bandId: 8, status: MusicStatus.APRENDENDO },
    { id: 38, title: "Little Wing", bandId: 8, status: MusicStatus.APRENDENDO },
    { id: 39, title: "Fire", bandId: 8, status: MusicStatus.APRENDENDO },
    { id: 40, title: "Voodoo Child", bandId: 8, status: MusicStatus.APRENDENDO },

    // The Beatles
    { id: 41, title: "Love Me Do", bandId: 9, status: MusicStatus.APRENDENDO },
    { id: 42, title: "Let It Be", bandId: 9, status: MusicStatus.APRENDENDO },
    { id: 43, title: "Twist and Shout", bandId: 9, status: MusicStatus.APRENDENDO },
    { id: 44, title: "Yesterday", bandId: 9, status: MusicStatus.APRENDENDO },
    { id: 45, title: "Ticket to Ride", bandId: 9, status: MusicStatus.APRENDENDO },

    // Linkin Park
    { id: 46, title: "In the End", bandId: 10, status: MusicStatus.APRENDENDO },
    { id: 47, title: "Numb", bandId: 10, status: MusicStatus.APRENDENDO },
    { id: 48, title: "What I’ve Done", bandId: 10, status: MusicStatus.APRENDENDO },
    { id: 49, title: "Shadow of the Day", bandId: 10, status: MusicStatus.APRENDENDO },
    { id: 50, title: "Leave Out All the Rest", bandId: 10, status: MusicStatus.APRENDENDO },

    // Red Hot Chili Peppers
    { id: 51, title: "Californication", bandId: 11, status: MusicStatus.APRENDENDO },
    { id: 52, title: "Otherside", bandId: 11, status: MusicStatus.APRENDENDO },
    { id: 53, title: "Zephyr Song", bandId: 11, status: MusicStatus.APRENDENDO },
    { id: 54, title: "Under the Bridge", bandId: 11, status: MusicStatus.APRENDENDO },
    { id: 55, title: "Soul to Squeeze", bandId: 11, status: MusicStatus.APRENDENDO },

    // Slipknot
    { id: 56, title: "Snuff", bandId: 12, status: MusicStatus.APRENDENDO },
    { id: 57, title: "Dead Memories", bandId: 12, status: MusicStatus.APRENDENDO },
    { id: 58, title: "Vermilion Pt. 2", bandId: 12, status: MusicStatus.APRENDENDO },
    { id: 59, title: "Circle", bandId: 12, status: MusicStatus.APRENDENDO },
    { id: 60, title: "Gently", bandId: 12, status: MusicStatus.APRENDENDO },

    // Arctic Monkeys
    { id: 61, title: "Do I Wanna Know?", bandId: 13, status: MusicStatus.APRENDENDO },
    { id: 62, title: "Why’d You Only Call Me When You’re High?", bandId: 13, status: MusicStatus.APRENDENDO },
    { id: 63, title: "I Wanna Be Yours", bandId: 13, status: MusicStatus.APRENDENDO },
    { id: 64, title: "505", bandId: 13, status: MusicStatus.APRENDENDO },
    { id: 65, title: "Arabella", bandId: 13, status: MusicStatus.APRENDENDO },

    // Metallica
    { id: 66, title: "Nothing Else Matters", bandId: 14, status: MusicStatus.APRENDENDO },
    { id: 67, title: "Enter Sandman", bandId: 14, status: MusicStatus.APRENDENDO },
    { id: 68, title: "For Whom the Bell Tolls", bandId: 14, status: MusicStatus.APRENDENDO },
    { id: 69, title: "The Unforgiven", bandId: 14, status: MusicStatus.APRENDENDO },
    { id: 70, title: "Sad But True", bandId: 14, status: MusicStatus.APRENDENDO },

    // Oasis
    { id: 71, title: "Wonderwall", bandId: 15, status: MusicStatus.APRENDENDO },
    { id: 72, title: "Don’t Look Back in Anger", bandId: 15, status: MusicStatus.APRENDENDO },
    { id: 73, title: "Live Forever", bandId: 15, status: MusicStatus.APRENDENDO },
    { id: 74, title: "Champagne Supernova", bandId: 15, status: MusicStatus.APRENDENDO },
    { id: 75, title: "Stand By Me", bandId: 15, status: MusicStatus.APRENDENDO },
];