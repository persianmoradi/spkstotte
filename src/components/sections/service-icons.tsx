import {
  UserRound,
  HandHeart,
  Sparkles,
  Users2,
  Eye,
  ShieldCheck,
  Home,
  type LucideIcon,
} from "lucide-react";

/** Mapper indsats-slug til et passende ikon. */
export const serviceIcons: Record<string, LucideIcon> = {
  stottekontaktperson: UserRound,
  "paedagogisk-stotte": HandHeart,
  ungestotte: Sparkles,
  familiebehandling: Home,
  "stotteperson-75": ShieldCheck,
  "stottet-samvaer": Users2,
  "overvaaget-samvaer": Eye,
};
