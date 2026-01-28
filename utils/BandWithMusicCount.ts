import { Band, Music } from "@/types/music";

export interface BandWithMusicCount extends Band {
    musicCount: number;
}

export function getBandsWithMusicCount(
    bands: Band[],
    musics: Music[]
): BandWithMusicCount[] {
    return bands.map((band) => {
        let count = 0;
        
        for (let i = 0; i < musics.length; i++) {
            if (musics[i].bandId === band.id) {
                count++;
            }
        }

        return {
            ...band,
            musicCount: count,
        };
    });
}
