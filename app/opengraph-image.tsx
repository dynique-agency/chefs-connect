import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

// Required for `output: export` (static export) on Next.js — without this the
// build fails to collect page data for this route and the OG image is never generated.
export const dynamic = 'force-static';
export const alt = 'Chefs Connect – Premium Horecapersoneel & Fine Dining Catering';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const playfair = readFileSync(join(process.cwd(), 'public/fonts/playfair-400.ttf'));
  const inter400 = readFileSync(join(process.cwd(), 'public/fonts/inter-400.ttf'));
  const inter600 = readFileSync(join(process.cwd(), 'public/fonts/inter-600.ttf'));

  const GOLD   = '#C9A961';
  const BROWN  = '#2C1810';
  const CREAM  = '#FAF8F3';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: BROWN,
          fontFamily: 'Inter',
        }}
      >
        {/* ── Top gold accent bar ─────────────────────────────── */}
        <div style={{ width: '100%', height: 5, background: GOLD, flexShrink: 0 }} />

        {/* ── Main content ────────────────────────────────────── */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            padding: '52px 80px 44px 80px',
          }}
        >
          {/* Left column — text */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flex: 1,
              paddingRight: 60,
            }}
          >
            {/* Top section */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>

              {/* Small brand tag */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  marginBottom: 30,
                }}
              >
                <div style={{ width: 28, height: 1, background: GOLD }} />
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: 12,
                    letterSpacing: '0.28em',
                    color: GOLD,
                    textTransform: 'uppercase',
                  }}
                >
                  PREMIUM HORECAPERSONEEL
                </span>
              </div>

              {/* Headline — Chefs Connect */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  fontFamily: 'Playfair',
                  fontWeight: 400,
                  fontSize: 88,
                  color: CREAM,
                  lineHeight: 1.0,
                  marginBottom: 26,
                  letterSpacing: '-0.01em',
                }}
              >
                <span>Chefs</span>
                <span>Connect</span>
              </div>

              {/* Gold divider */}
              <div
                style={{
                  width: 52,
                  height: 2,
                  background: GOLD,
                  marginBottom: 22,
                }}
              />

              {/* Tagline */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: 21,
                  color: 'rgba(250,248,243,0.60)',
                  lineHeight: 1.55,
                  letterSpacing: '0.01em',
                }}
              >
                <span>Van topchef tot bediening —</span>
                <span>voor de betere horeca.</span>
              </div>
            </div>

            {/* CTA row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 24,
                marginTop: 32,
              }}
            >
              <div
                style={{
                  background: GOLD,
                  color: BROWN,
                  padding: '14px 34px',
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: 14,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <span>Neem contact op</span>
                <span style={{ fontSize: 16 }}>→</span>
              </div>

              <span
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: 15,
                  color: 'rgba(201,169,97,0.45)',
                  letterSpacing: '0.06em',
                }}
              >
                chefs-connect.nl
              </span>
            </div>
          </div>

          {/* Right column — decorative rings */}
          <div
            style={{
              width: 300,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              alignSelf: 'center',
            }}
          >
            {/* Outermost ring */}
            <div
              style={{
                width: 280,
                height: 280,
                borderRadius: '50%',
                border: '1px solid rgba(201,169,97,0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Middle ring */}
              <div
                style={{
                  width: 214,
                  height: 214,
                  borderRadius: '50%',
                  border: '1px solid rgba(201,169,97,0.22)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Inner ring */}
                <div
                  style={{
                    width: 142,
                    height: 142,
                    borderRadius: '50%',
                    border: '1px solid rgba(201,169,97,0.38)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {/* Core — filled gold circle with CC monogram */}
                  <div
                    style={{
                      width: 76,
                      height: 76,
                      borderRadius: '50%',
                      background: GOLD,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Playfair',
                        fontWeight: 400,
                        fontSize: 26,
                        color: BROWN,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      CC
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer bar ──────────────────────────────────────── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 80px',
            height: 48,
            borderTop: '1px solid rgba(201,169,97,0.18)',
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: 12,
              color: 'rgba(201,169,97,0.45)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            chefs-connect.nl
          </span>
          <span
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: 12,
              color: 'rgba(250,248,243,0.25)',
              letterSpacing: '0.12em',
            }}
          >
            Nederland & België
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Playfair', data: playfair, weight: 400, style: 'normal' },
        { name: 'Inter',    data: inter400, weight: 400, style: 'normal' },
        { name: 'Inter',    data: inter600, weight: 600, style: 'normal' },
      ],
    }
  );
}
