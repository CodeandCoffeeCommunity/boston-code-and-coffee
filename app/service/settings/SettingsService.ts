
import { configuration } from '@/app/constants/Configuration';
import { CodeCoffeeChapter } from '@/app/types/domain/CodeCoffeeChapter';
import { request } from '@/app/util/RequestUtil';

/**
 * Get a list of all the Code and Coffee Chapters
 */
export async function getCodeCoffeeChapters(): Promise<CodeCoffeeChapter[]> {
  return await request({
    name: 'Chapters Setting',
    url: `${configuration.SETTINGS_BASE_URL}/chapters.json`,
    method: 'GET',
  }) as CodeCoffeeChapter[];
}

/**
 * Get the icon for the given chapter
 *
 * @param chapter The chapter to get the icon for
 */
export async function getChapterIcon(chapter: string): Promise<ArrayBuffer> {
  return await request({
    name: 'Chapter Icon',
    responseType: 'arrayBuffer',
    url: `${configuration.SETTINGS_BASE_URL}/chapter-icons/${chapter}.png`,
    method: 'GET',
  });
}
