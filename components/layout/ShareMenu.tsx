'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { QRCodeCanvas } from 'qrcode.react'

export default function ShareMenu() {
  const pathname = usePathname()
  const [currentUrl, setCurrentUrl] = useState('')
  const [qrOpen, setQrOpen]         = useState(false)
  const [toast, setToast]           = useState<string | null>(null)

  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [pathname])

  const message = 'Check out AB Travels — your trusted travel agency in Navsari, Gujarat!'

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 3000)
    return () => clearTimeout(t)
  }, [toast])

  const handleCopy = () => {
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => setToast('Link copied to clipboard!'))
      .catch(() => setToast('Failed to copy. Please try manually.'))
  }

  const handleNative = () => {
    if (navigator.share) {
      navigator.share({ title: 'AB Travels', text: message, url: currentUrl }).catch(() => {})
    } else {
      setToast('Native sharing not supported on this device.')
    }
  }

  const options = [
    {
      label: 'Copy Link',
      color: '#757575',
      icon: <LinkIcon />,
      onClick: handleCopy,
    },
    {
      label: 'WhatsApp',
      color: '#25D366',
      icon: <WhatsAppIcon />,
      onClick: () => window.open(`https://wa.me/?text=${encodeURIComponent(`${message}\n\n${currentUrl}`)}`, '_blank'),
    },
    {
      label: 'Facebook',
      color: '#1877F2',
      icon: <FacebookIcon />,
      onClick: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank'),
    },
    {
      label: 'Email',
      color: '#D44638',
      icon: <EmailIcon />,
      onClick: () => window.open(`mailto:?subject=${encodeURIComponent(message)}&body=${encodeURIComponent(`${message}\n\n${currentUrl}`)}`, '_blank'),
    },
    {
      label: 'QR Code',
      color: '#424242',
      icon: <QrIcon />,
      onClick: () => setQrOpen(true),
    },
    {
      label: 'More',
      color: '#4285F4',
      icon: <NativeShareIcon />,
      onClick: handleNative,
    },
  ]

  return (
    <>
      <div className="w-full bg-[var(--cream)] border-t border-[var(--gray-soft)] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--text-muted)] shrink-0">
            Share this page
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {options.map((opt) => (
              <button
                key={opt.label}
                onClick={opt.onClick}
                title={opt.label}
                aria-label={opt.label}
                className="flex items-center gap-2 px-3 py-2 rounded-full text-white text-xs font-medium transition-all hover:scale-105 active:scale-95 shadow-sm"
                style={{ backgroundColor: opt.color }}
              >
                {opt.icon}
                <span className="hidden sm:inline">{opt.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* QR Modal */}
      {qrOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setQrOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 shadow-2xl flex flex-col items-center gap-4 max-w-xs w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-base font-bold text-[var(--navy)]"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Share via QR Code
            </h3>
            <div className="p-3 bg-[var(--cream)] rounded-xl">
              <QRCodeCanvas value={currentUrl || 'https://abtravels.net'} size={180} />
            </div>
            <p className="text-xs text-[var(--text-muted)] text-center">
              Scan to open this page
            </p>
            <button
              onClick={() => setQrOpen(false)}
              className="w-full py-2.5 bg-[var(--sky)] hover:bg-[var(--sky-dark)] text-white font-semibold rounded-xl text-sm transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-24 left-4 z-50 bg-[var(--navy)] text-white text-sm font-medium px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 animate-fade-in-up">
          <span className="text-[var(--sky)]">✓</span>
          {toast}
        </div>
      )}
    </>
  )
}

function LinkIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
}

function WhatsAppIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
}

function FacebookIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
}

function EmailIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
}

function QrIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg>
}

function NativeShareIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
}