import { Shield, DollarSign, Laptop, CheckCircle, TrendingUp, Zap, Award, Video as LucideIcon } from 'lucide-react';

export interface TrustBadge {
  icon: LucideIcon;
  label: string;
  color: string;
  bgColor: string;
}

export interface HeroContent {
  headline: {
    line1: string;
    line2: string;
  };
  subHeadline: string;
  ctaText: string;
  ctaIcon: LucideIcon;
  trustBadges: TrustBadge[];
}

export const heroContentConfig: Record<string, HeroContent> = {
  default: {
    headline: {
      line1: 'Secure, Compliant & Profitable',
      line2: 'IT Asset Disposition'
    },
    subHeadline: 'Transform retired IT assets into revenue while ensuring complete data security and environmental compliance. Join 675+ enterprises maximizing their ITAD value.',
    ctaText: 'Get Your Free Assessment',
    ctaIcon: Shield,
    trustBadges: [
      {
        icon: Shield,
        label: 'NIST Certified',
        color: 'text-curious-blue',
        bgColor: 'from-curious-blue/20 to-mountain-meadow/15'
      },
      {
        icon: CheckCircle,
        label: 'EPA R2 Compliant',
        color: 'text-mountain-meadow',
        bgColor: 'from-mountain-meadow/20 to-curious-blue/15'
      },
      {
        icon: Award,
        label: '675+ Enterprises',
        color: 'text-java',
        bgColor: 'from-java/20 to-mountain-meadow/15'
      }
    ]
  },
  cfo: {
    headline: {
      line1: 'Turn IT Assets Into',
      line2: 'Immediate Revenue'
    },
    subHeadline: 'Unlock hidden capital from retired IT equipment. Our value recovery programs deliver measurable ROI while ensuring compliance.',
    ctaText: 'Calculate Asset Value',
    ctaIcon: DollarSign,
    trustBadges: [
      {
        icon: DollarSign,
        label: '$12.5M+ Recovered',
        color: 'text-curious-blue',
        bgColor: 'from-curious-blue/20 to-mountain-meadow/15'
      },
      {
        icon: TrendingUp,
        label: '85% Avg Recovery',
        color: 'text-java',
        bgColor: 'from-java/20 to-mountain-meadow/15'
      },
      {
        icon: CheckCircle,
        label: 'Fast Payment',
        color: 'text-mountain-meadow',
        bgColor: 'from-mountain-meadow/20 to-curious-blue/15'
      }
    ]
  },
  itdirector: {
    headline: {
      line1: 'Simplified IT Asset',
      line2: 'Lifecycle Management'
    },
    subHeadline: 'End-to-end ITAD solutions with complete chain-of-custody tracking. Secure, efficient, and fully documented.',
    ctaText: 'View ITAD Process',
    ctaIcon: Laptop,
    trustBadges: [
      {
        icon: Zap,
        label: '7-Day Service',
        color: 'text-java',
        bgColor: 'from-java/20 to-mountain-meadow/15'
      },
      {
        icon: Shield,
        label: 'Zero Breaches',
        color: 'text-curious-blue',
        bgColor: 'from-curious-blue/20 to-mountain-meadow/15'
      },
      {
        icon: CheckCircle,
        label: 'Full Audit Trail',
        color: 'text-mountain-meadow',
        bgColor: 'from-mountain-meadow/20 to-curious-blue/15'
      }
    ]
  },
  compliance: {
    headline: {
      line1: '100% Compliant',
      line2: 'ITAD Services'
    },
    subHeadline: 'NIST 800-88 compliant data destruction with comprehensive audit trails. Certified for HIPAA, SOX, and GLBA requirements.',
    ctaText: 'View Certifications',
    ctaIcon: Shield,
    trustBadges: [
      {
        icon: Shield,
        label: 'NIST Certified',
        color: 'text-curious-blue',
        bgColor: 'from-curious-blue/20 to-mountain-meadow/15'
      },
      {
        icon: Award,
        label: 'HIPAA/SOX',
        color: 'text-mountain-meadow',
        bgColor: 'from-mountain-meadow/20 to-curious-blue/15'
      },
      {
        icon: CheckCircle,
        label: 'Zero Failures',
        color: 'text-mountain-meadow',
        bgColor: 'from-mountain-meadow/20 to-curious-blue/15'
      }
    ]
  }
};
