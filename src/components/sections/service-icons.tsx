import {
  UserRound,
  HandHeart,
  Sparkles,
  Users2,
  Eye,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

/** Mapper ydelses-slug til et passende ikon. */
export const serviceIcons: Record<string, LucideIcon> = {
  stottekontaktperson: UserRound,
  "paedagogisk-stotte": HandHeart,
  ungestotte: Sparkles,
  "stotteperson-75": ShieldCheck,
  "stottet-samvaer": Users2,
  "overvaaget-samvaer": Eye,
};
