export interface DribbleResponse {
  html_url: string;
  id: number;
  images: Images;
  title: string;
  published_at: string;
}

export interface Images {
  hidpi: string;
  normal: string;
}
