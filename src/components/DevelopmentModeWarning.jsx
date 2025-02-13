import { useState, useEffect } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export function DevelopmentModeWarning() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(()=>{
    setIsOpen(true)
    setTimeout(()=>{
      setIsOpen(false)
    }, 5000)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>⚠️ Development Mode Warning</AlertDialogTitle>
          <AlertDialogDescription>
          Our website is currently in development mode. Please note that you
            may encounter some issues. We apologize for any inconvenience this
            may cause. If you face any problems, please contact us via email or
            fill out our contact form with your feedback.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleClose}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
