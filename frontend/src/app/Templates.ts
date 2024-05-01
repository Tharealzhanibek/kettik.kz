export interface Event {
    id: number;
    title: string;
    description: string;
    start_datetime: string;
    location: string;
    seats_available: number;
    image: string;
    phone_number: string;
    social_media_url: string;
    genre: string;
    saw_count: number;
}
  
export interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export interface BookRequest {
    event_id: number;
    num_tickets: number;
}