const FLOWKIT_FRAMES = {
  dashboard: DashboardFrame,
  analytics: AnalyticsFrame,
  onboarding: OnboardingFrame,
  mobile: MobileFrame,
}

const LUMEN_FRAMES = {
  home: LumenHomeFrame,
  appointments: LumenAppointmentsFrame,
  records: LumenRecordsFrame,
  telehealth: LumenTelehealthFrame,
}

const FRAME_SETS = {
  flowkit: FLOWKIT_FRAMES,
  lumen: LUMEN_FRAMES,
}

export function FigmaFrameScreen({ frameId, compact = false, variant = 'flowkit' }) {
  const frames = FRAME_SETS[variant] ?? FLOWKIT_FRAMES
  const Frame = frames[frameId] ?? Object.values(frames)[0]
  return <Frame compact={compact} />
}

function DashboardFrame({ compact }) {
  return (
    <div className={`figma-frame figma-frame--dashboard ${compact ? 'figma-frame--compact' : ''}`}>
      <div className="figma-frame__topbar">
        <span>FlowKit</span>
        <div className="figma-frame__avatar" />
      </div>
      <div className="figma-frame__dash-grid">
        <div className="figma-frame__stat">
          <span>Revenue</span>
          <strong>$84.2K</strong>
          <em>+12.4%</em>
        </div>
        <div className="figma-frame__stat">
          <span>Users</span>
          <strong>12,847</strong>
          <em>+8.1%</em>
        </div>
        <div className="figma-frame__stat">
          <span>Conversion</span>
          <strong>4.8%</strong>
          <em>+2.3%</em>
        </div>
      </div>
      <div className="figma-frame__chart">
        {[42, 68, 55, 82, 64, 91, 78].map((height, index) => (
          <span key={index} style={{ '--h': `${height}%` }} />
        ))}
      </div>
      <div className="figma-frame__rows">
        <div /><div /><div />
      </div>
    </div>
  )
}

function AnalyticsFrame({ compact }) {
  return (
    <div className={`figma-frame figma-frame--analytics ${compact ? 'figma-frame--compact' : ''}`}>
      <div className="figma-frame__analytics-head">
        <strong>Performance</strong>
        <span>Last 30 days</span>
      </div>
      <div className="figma-frame__donut-wrap">
        <div className="figma-frame__donut" />
        <ul>
          <li><span /> Organic 42%</li>
          <li><span /> Paid 31%</li>
          <li><span /> Direct 27%</li>
        </ul>
      </div>
      <div className="figma-frame__line-chart">
        <svg aria-hidden="true" viewBox="0 0 200 60">
          <polyline fill="none" points="0,45 30,38 60,42 90,22 120,28 150,12 180,18 200,8" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      </div>
    </div>
  )
}

function OnboardingFrame({ compact }) {
  return (
    <div className={`figma-frame figma-frame--onboarding ${compact ? 'figma-frame--compact' : ''}`}>
      <div className="figma-frame__steps">
        <span className="figma-frame__step figma-frame__step--done" />
        <span className="figma-frame__step figma-frame__step--active" />
        <span className="figma-frame__step" />
        <span className="figma-frame__step" />
      </div>
      <strong>Connect your workspace</strong>
      <p>Import data sources and invite your team in one flow.</p>
      <div className="figma-frame__form">
        <div /><div />
        <button type="button">Continue</button>
      </div>
      <div className="figma-frame__chips">
        <span>Slack</span>
        <span>Notion</span>
        <span>HubSpot</span>
      </div>
    </div>
  )
}

function MobileFrame({ compact }) {
  return (
    <div className={`figma-frame figma-frame--mobile ${compact ? 'figma-frame--compact' : ''}`}>
      <div className="figma-frame__phone">
        <div className="figma-frame__phone-notch" />
        <div className="figma-frame__phone-body">
          <strong>Good morning, Alex</strong>
          <div className="figma-frame__phone-card">
            <span>Today&apos;s focus</span>
            <strong>Launch review</strong>
          </div>
          <div className="figma-frame__phone-list">
            <div /><div /><div />
          </div>
          <div className="figma-frame__phone-nav">
            <span /><span /><span /><span />
          </div>
        </div>
      </div>
    </div>
  )
}

function LumenHomeFrame({ compact }) {
  return (
    <div className={`figma-frame figma-frame--lumen-home ${compact ? 'figma-frame--compact' : ''}`}>
      <div className="figma-frame__lumen-header">
        <span>Hi, Sarah</span>
        <div className="figma-frame__avatar figma-frame__avatar--teal" />
      </div>
      <div className="figma-frame__lumen-vitals">
        <div className="figma-frame__vital">
          <span>Heart Rate</span>
          <strong>72</strong>
          <em>bpm</em>
        </div>
        <div className="figma-frame__vital">
          <span>Sleep</span>
          <strong>7.4</strong>
          <em>hrs</em>
        </div>
        <div className="figma-frame__vital">
          <span>Steps</span>
          <strong>8.2K</strong>
        </div>
      </div>
      <div className="figma-frame__lumen-card">
        <strong>Today&apos;s wellness plan</strong>
        <p>Meditation · Hydration · Evening walk</p>
      </div>
      <div className="figma-frame__lumen-actions">
        <span>Book visit</span>
        <span>Messages</span>
        <span>Records</span>
      </div>
    </div>
  )
}

function LumenAppointmentsFrame({ compact }) {
  return (
    <div className={`figma-frame figma-frame--lumen-booking ${compact ? 'figma-frame--compact' : ''}`}>
      <strong>Book appointment</strong>
      <p>Select a specialist and time slot</p>
      <div className="figma-frame__lumen-calendar">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, index) => (
          <span
            key={day}
            className={index === 2 ? 'figma-frame__cal-day figma-frame__cal-day--active' : 'figma-frame__cal-day'}
          >
            {day}
          </span>
        ))}
      </div>
      <div className="figma-frame__lumen-slots">
        <div className="figma-frame__slot figma-frame__slot--active">10:30 AM · Dr. Patel</div>
        <div className="figma-frame__slot">2:00 PM · Dr. Chen</div>
        <div className="figma-frame__slot">4:15 PM · Video call</div>
      </div>
      <button className="figma-frame__lumen-btn" type="button">Confirm booking</button>
    </div>
  )
}

function LumenRecordsFrame({ compact }) {
  return (
    <div className={`figma-frame figma-frame--lumen-records ${compact ? 'figma-frame--compact' : ''}`}>
      <strong>Medical records</strong>
      <div className="figma-frame__lumen-search" />
      <ul className="figma-frame__lumen-list">
        <li>
          <span>Blood work</span>
          <em>Jan 12, 2025</em>
        </li>
        <li>
          <span>Annual checkup</span>
          <em>Dec 03, 2024</em>
        </li>
        <li>
          <span>Prescription refill</span>
          <em>Nov 18, 2024</em>
        </li>
      </ul>
    </div>
  )
}

function LumenTelehealthFrame({ compact }) {
  return (
    <div className={`figma-frame figma-frame--lumen-chat ${compact ? 'figma-frame--compact' : ''}`}>
      <div className="figma-frame__chat-head">
        <div className="figma-frame__avatar figma-frame__avatar--teal" />
        <div>
          <strong>Dr. Rivera</strong>
          <span>Online · Telehealth</span>
        </div>
      </div>
      <div className="figma-frame__chat-bubbles">
        <div className="figma-frame__bubble figma-frame__bubble--in">How are you feeling today?</div>
        <div className="figma-frame__bubble figma-frame__bubble--out">Much better, thank you!</div>
        <div className="figma-frame__bubble figma-frame__bubble--in">Great — keep up the routine.</div>
      </div>
      <div className="figma-frame__chat-input">
        <span>Type a message…</span>
        <button type="button">Send</button>
      </div>
    </div>
  )
}
