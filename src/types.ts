export interface Response {
    rate_limit: {
        limit: number,
        remaining: number,
        reset: number,
        reset_in: number,
    };

    data?: Object;
}

export interface ListenPayload {
    count: number;
    listens: Listen[];
}

export interface SubmitListenPayload {
    listen_type: "single" | "playing_now" | "import";
    payload: Listen[];
}

export interface Track {
    artist_name: string;
    track_name: string;
    release_name?: string;
    artist_mbids?: string[] | undefined;
    artist_msid?: string | undefined;
    recording_mbid?: string | undefined;
    release_mbid?: string | undefined;
    release_msid?: string | undefined;
    tags?: string[];
}

export interface Listen {
    listened_at: Date | number;
    recording_msid?: string | undefined;
    track_metadata: Track;
}

export interface ClientError {
    status: number;
    message: string;
}