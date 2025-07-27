interface ApiResponse {
  code: number;
  data: Data;
  error: any[];
  message: string;
  payload: any[];
  status_code: number;
}

interface Data {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  media: Medium[];
  checklist: ChecklistItem[];
  seo: Seo;
  cta_text: CtaText;
  sections: Section[];
}

interface Medium {
  name: string;
  resource_type: "video" | "image";
  resource_value: string;
  thumbnail_url: string;
}

interface ChecklistItem {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

interface Seo {
  defaultMeta: MetaTag[];
  description: string;
  keywords: string[];
  schema: any[];
  title: string;
}

interface MetaTag {
  content: string;
  type: string;
  value: string;
}

interface CtaText {
  name: string;
  value: string;
}

interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: any[];
}

interface Instructor {
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
}

interface Feature {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
}

interface GroupJoinEngagement {
  background: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta: {
    clicked_url: string;
    color: string;
    text: string;
  };
  description: string;
  description_color: string;
  id: string;
  thumbnail: string;
  title: string;
  title_color: string;
  top_left_icon_img: string;
}

interface Pointer {
  color: string;
  icon: string;
  id: string;
  text: string;
}

interface ExclusiveFeature {
  checklist: string[];
  file_type: "image" | "video";
  file_url: string;
  id: string;
  title: string;
  video_thumbnail: string;
}

interface Testimonial {
  id: string;
  name: string;
  description: string;
  testimonial: string;
  profile_image: string;
  thumb?: string;
  video_url?: string;
}

interface About {
  description: string;
  icon: string;
  id: string;
  title: string;
}
