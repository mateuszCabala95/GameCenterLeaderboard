/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddResult } from '../models/AddResult';
import type { Score } from '../models/Score';
import { request as __request } from '../core/request';

export class LeaderboardService {

    /**
     * Get top 10 results
     * @returns Score successful operation
     * @throws ApiError
     */
    public static async getTop10(): Promise<Array<Score>> {
        const result = await __request({
            method: 'GET',
            path: `/leaderboard`,
            errors: {
                503: `unavailable service`,
            },
        });
        return result.body;
    }

    /**
     * Add new result
     * @returns Score Added
     * @throws ApiError
     */
    public static async addResult({
        requestBody,
    }: {
        requestBody: AddResult,
    }): Promise<Score> {
        const result = await __request({
            method: 'POST',
            path: `/leaderboard`,
            body: requestBody,
            errors: {
                400: `Invalid input`,
                503: `unavailable service`,
            },
        });
        return result.body;
    }

}