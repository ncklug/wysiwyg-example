import { Box } from '@mantine/core'
import React, { useRef, useState } from 'react'
import {
  IconCircleChevronLeft,
  IconCircleChevronRight,
} from '@tabler/icons-react'
import { ConfigTab } from './ConfigTab'

const ICON_WIDTH = 24

export const LIGHT_GREY = '#D9D9D9'

type DevSidebarProps = {
  children: React.ReactNode
}

/**
 * Main DevSidebar component.
 *
 * Handles resizing, and delegates content specification to DevSidebarContent.
 */
export const DevSidebar = ({ children }: DevSidebarProps) => {
  const resizerRef = useRef(null as null | HTMLDivElement)
  const [isResizing, setIsResizing] = useState(false)

  const [isOpen, setIsOpen] = useState(false)
  const [chosenSidebarWidth, setChosenSidebarWidth] = useState(500)
  const sidebarWidth = !isOpen ? 0 : chosenSidebarWidth

  const startResizing = React.useCallback(() => {
    setIsResizing(true)
  }, [])

  const stopResizing = React.useCallback(() => {
    setIsResizing(false)
  }, [])

  const resize = React.useCallback(
    (mouseMoveEvent: MouseEvent) => {
      const boundingRect = resizerRef.current?.getBoundingClientRect()
      if (isResizing && boundingRect) {
        setChosenSidebarWidth(boundingRect.right - mouseMoveEvent.clientX)
      }
    },
    [isResizing]
  )

  React.useEffect(() => {
    window.addEventListener('mousemove', resize)
    window.addEventListener('mouseup', stopResizing)
    return () => {
      window.removeEventListener('mousemove', resize)
      window.removeEventListener('mouseup', stopResizing)
    }
  }, [resize, stopResizing])

  const Icon = isOpen ? IconCircleChevronRight : IconCircleChevronLeft

  return (
    <Box
      sx={{ display: 'flex' }}
      style={isResizing ? { cursor: 'grabbing' } : {}}
    >
      <div style={{ width: `calc(100vw - ${sidebarWidth}px)` }}>{children}</div>
      <Box
        sx={{ display: 'flex' }}
        ref={resizerRef}
        style={{
          width: sidebarWidth,
        }}
      >
        <Box
          sx={{
            flex: '0 0 6px',
            backgroundColor: LIGHT_GREY,
            height: '100%',
          }}
          onMouseDown={startResizing}
          style={{ cursor: isResizing ? 'grabbing' : 'grab', zIndex: 1 }}
        >
          <Icon
            onClick={e => {
              setIsOpen(prev => !prev)
            }}
            onMouseDown={e => {
              e.stopPropagation()
            }}
            style={{
              right:
                sidebarWidth - ICON_WIDTH / 2 + (sidebarWidth === 0 ? 2 : -3),
              position: 'fixed',
              top: 100,
              fontSize: ICON_WIDTH,
              cursor: 'pointer',
            }}
          />
        </Box>
        <Box
          style={{
            position: 'fixed',
            width: sidebarWidth || '100%',
            bottom: 0,
            top: 0,
            overflowY: 'scroll',
          }}
        >
          <DevSidebarContent />
        </Box>
      </Box>
    </Box>
  )
}

const DevSidebarContent: React.FC = () => (
  <Box sx={{ margin: '10px 20px' }}>
    <h1>Nuna Devtools</h1>
    <ConfigTab />
  </Box>
)
