import {
  Accessibility,
  AppWindow,
  ArrowLeft,
  ArrowRight,
  ArrowRightLeft,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Blocks,
  BookOpen,
  Bot,
  Brain,
  Briefcase,
  Building2,
  Calendar,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CircleAlert,
  CircleCheck,
  Clock,
  Cloud,
  Code,
  Code2,
  Compass,
  CreditCard,
  Database,
  Facebook,
  FileText,
  Gauge,
  GitBranch,
  Globe,
  GraduationCap,
  Handshake,
  Heart,
  HeartPulse,
  Image as ImageGlyph,
  Languages,
  Layers,
  LayoutDashboard,
  Lightbulb,
  LineChart,
  Link as LinkGlyph,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageSquare,
  MonitorSmartphone,
  MousePointerClick,
  MoveRight,
  Package,
  Palette,
  PenTool,
  Phone,
  Plug,
  Puzzle,
  Quote,
  RefreshCw,
  Repeat,
  Rocket,
  Search,
  Send,
  Server,
  Settings,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Star,
  Store,
  TabletSmartphone,
  Target,
  TrendingUp,
  Users,
  Wrench,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react';

/**
 * Thin wrapper over lucide-react: 2px stroke line glyphs, referenced by the
 * mockup's kebab-case names. Icons are registered explicitly (rather than
 * pulling lucide's whole index) so unused glyphs stay out of the bundle.
 */
const registry: Record<string, LucideIcon> = {
  /* Mockup UI glyphs */
  'arrow-right': ArrowRight,
  'arrow-left': ArrowLeft,
  'arrow-up-right': ArrowUpRight,
  'arrow-right-left': ArrowRightLeft,
  'chevron-right': ChevronRight,
  'chevron-left': ChevronLeft,
  'chevron-down': ChevronDown,
  'chevron-up': ChevronUp,
  'move-right': MoveRight,
  check: Check,
  'circle-check': CircleCheck,
  'badge-check': BadgeCheck,
  'circle-alert': CircleAlert,
  x: X,
  menu: Menu,
  /* Contact + social */
  mail: Mail,
  phone: Phone,
  'map-pin': MapPin,
  linkedin: Linkedin,
  facebook: Facebook,
  send: Send,
  'message-square': MessageSquare,
  calendar: Calendar,
  clock: Clock,
  link: LinkGlyph,
  /* Design services */
  'layout-dashboard': LayoutDashboard,
  'pen-tool': PenTool,
  palette: Palette,
  image: ImageGlyph,
  sparkles: Sparkles,
  'refresh-cw': RefreshCw,
  compass: Compass,
  /* Development services */
  code: Code,
  'code-2': Code2,
  globe: Globe,
  puzzle: Puzzle,
  plug: Plug,
  layers: Layers,
  blocks: Blocks,
  'app-window': AppWindow,
  cloud: Cloud,
  smartphone: Smartphone,
  'tablet-smartphone': TabletSmartphone,
  'monitor-smartphone': MonitorSmartphone,
  'shopping-cart': ShoppingCart,
  'shopping-bag': ShoppingBag,
  store: Store,
  'credit-card': CreditCard,
  database: Database,
  'git-branch': GitBranch,
  package: Package,
  /* Growth + optimisation */
  search: Search,
  'trending-up': TrendingUp,
  gauge: Gauge,
  zap: Zap,
  target: Target,
  'mouse-pointer-click': MousePointerClick,
  'bar-chart-3': BarChart3,
  'line-chart': LineChart,
  megaphone: Megaphone,
  /* Platform + support */
  wrench: Wrench,
  repeat: Repeat,
  'shield-check': ShieldCheck,
  lock: Lock,
  server: Server,
  settings: Settings,
  accessibility: Accessibility,
  brain: Brain,
  bot: Bot,
  languages: Languages,
  /* Editorial / general */
  'file-text': FileText,
  'book-open': BookOpen,
  lightbulb: Lightbulb,
  rocket: Rocket,
  users: Users,
  briefcase: Briefcase,
  'building-2': Building2,
  'graduation-cap': GraduationCap,
  handshake: Handshake,
  heart: Heart,
  'heart-pulse': HeartPulse,
  quote: Quote,
  star: Star,
};

export type IconName = keyof typeof registry;

export interface IconProps {
  /** Kebab-case lucide name, e.g. "arrow-right". Unknown names fall back to arrow-right. */
  name?: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
  /** Set only when the icon is not purely decorative. */
  title?: string;
}

export function Icon({ name = 'arrow-right', size = 20, strokeWidth = 2, className, title }: IconProps) {
  const Glyph = registry[name] ?? ArrowRight;
  return (
    <Glyph
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      role={title ? 'img' : undefined}
      focusable="false"
    />
  );
}

/** True when a kebab-case name is registered — lets content authors be validated. */
export function hasIcon(name: string): boolean {
  return name in registry;
}
