// React
import React, { useState, useRef, useEffect } from "react"

// MUI
import {
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  FormControlLabel,
  Radio,
  FormLabel,
  RadioGroup,
  Box,
  Typography,
} from "@mui/material"

// Components
import ButtonCustom from "@/components/atoms/ButtonCustom/ButtonCustom"

// Styles
import { FormContainer, FormSectionTitle } from "./ModalForm.styles"

// Properties
import { ModalFormProps } from "./ModalForm.props"

// Constants
import { initialFormData, requiredFields } from "./ModalForm.constants"

const ModalForm = ({ open, handleClose }: ModalFormProps) => {
  const formRenderedTime = useRef(Date.now())
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  useEffect(() => {
    if (open) {
      formRenderedTime.current = Date.now()
      setSuccess(false)
      setFormData(initialFormData)
      setErrors({})
    }
  }, [open])

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [field]: event.target.value }))
    setErrors(prev => ({ ...prev, [field]: false }))
  }

  const handleRadioChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: event.target.value }))
    setErrors(prev => ({ ...prev, [field]: false }))
  }

  const validateForm = () => {
    const newErrors: Record<string, boolean> = {}
    requiredFields.forEach(field => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field] = true
        console.log(`Missing required field: ${field}`)
      }
    })
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      console.warn("❗️Validation failed. Fill required fields.")
      return
    }

    if (formData.honeypot || Date.now() - formRenderedTime.current < 3000) {
      console.warn("🤖 Bot detected")
      return
    }

    try {
      const response = await fetch("/api/send-form-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log("✅ Form successfully sent!")
        setSuccess(true)
      } else {
        console.error("❌ Error sending form:", await response.text())
      }
    } catch (error) {
      console.error("❌ Error:", error)
    }
  }

  return (
    <Dialog open={open} onClose={handleClose} scroll="paper" fullWidth maxWidth="sm">
      <DialogContent dividers>
        {success ? (
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" py={4}>
            <Typography variant="h3" gutterBottom>
              To Valhalla!
            </Typography>
            <Typography variant="body1" textAlign="center">
              We&apos;ve successfully received your application. We&apos;ll be in touch soon.
            </Typography>
          </Box>
        ) : (
          <Box component="form" onSubmit={handleSubmit}>
            <FormContainer>
              {/* Honeypot hidden field */}
              <Box sx={{ display: "none" }}>
                <TextField
                  label="Leave this field blank"
                  value={formData.honeypot}
                  onChange={handleChange("honeypot")}
                  autoComplete="off"
                  fullWidth
                />
              </Box>

              {/* Personal Information */}
              <FormSectionTitle variant="h6">Personal Information</FormSectionTitle>
              <TextField
                required
                label="Full Name"
                value={formData.fullName}
                error={errors.fullName}
                helperText={errors.fullName && "Required"}
                onChange={handleChange("fullName")}
                fullWidth
              />
              <TextField
                required
                label="Date of Birth (MM/DD/YYYY)"
                value={formData.dateOfBirth}
                error={errors.dateOfBirth}
                helperText={errors.dateOfBirth && "Required"}
                onChange={handleChange("dateOfBirth")}
                fullWidth
              />
              <TextField
                required
                label="Age"
                value={formData.age}
                error={errors.age}
                helperText={errors.age && "Required"}
                onChange={handleChange("age")}
                fullWidth
              />
              <TextField
                label="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange("phoneNumber")}
                fullWidth
              />
              <TextField
                required
                label="Email Address"
                value={formData.email}
                error={errors.email}
                helperText={errors.email && "Required"}
                onChange={handleChange("email")}
                fullWidth
              />
              <TextField
                required
                label="Location (City, State/Country)"
                value={formData.location}
                error={errors.location}
                helperText={errors.location && "Required"}
                onChange={handleChange("location")}
                fullWidth
              />

              <FormSectionTitle variant="h6">Social Media & Online Presence</FormSectionTitle>
              <TextField
                required
                label="Instagram Handle"
                value={formData.instagram}
                error={errors.instagram}
                helperText={errors.instagram && "Required"}
                onChange={handleChange("instagram")}
                fullWidth
              />
              <TextField
                required
                label="TikTok Handle"
                value={formData.tiktok}
                error={errors.tiktok}
                helperText={errors.tiktok && "Required"}
                onChange={handleChange("tiktok")}
                fullWidth
              />
              <TextField
                label="Twitter/X Handle (if applicable)"
                value={formData.twitter}
                onChange={handleChange("twitter")}
                fullWidth
              />
              <TextField
                label="OnlyFans (if applicable)"
                value={formData.onlyfans}
                onChange={handleChange("onlyfans")}
                fullWidth
              />
              <TextField
                label="Other Relevant Social Media Links"
                value={formData.otherLinks}
                onChange={handleChange("otherLinks")}
                multiline
                rows={2}
                fullWidth
              />

              <FormSectionTitle variant="h6">Availability & Commitment</FormSectionTitle>
              <FormLabel required error={errors.hoursPerWeek}>
                How many hours per week can you dedicate?
              </FormLabel>
              <RadioGroup value={formData.hoursPerWeek} onChange={handleRadioChange("hoursPerWeek")}>
                <FormControlLabel value="lessThan10" control={<Radio />} label="Less than 10 hours" />
                <FormControlLabel value="10-20" control={<Radio />} label="10-20 hours" />
                <FormControlLabel value="20-30" control={<Radio />} label="20-30 hours" />
                <FormControlLabel value="30+" control={<Radio />} label="30+ hours" />
              </RadioGroup>

              <FormLabel required error={errors.adultContentExperience}>
                Do you have experience creating adult/fantasy content?
              </FormLabel>
              <RadioGroup
                value={formData.adultContentExperience}
                onChange={handleRadioChange("adultContentExperience")}
                row
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>

              <FormLabel required error={errors.cameraSetup}>
                Do you have a professional camera/phone setup?
              </FormLabel>
              <RadioGroup value={formData.cameraSetup} onChange={handleRadioChange("cameraSetup")} row>
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="noInvest" control={<Radio />} label="No, but I am willing to invest" />
                <FormControlLabel value="noGuidance" control={<Radio />} label="No, I need guidance" />
              </RadioGroup>

              <FormLabel required error={errors.liveShows}>
                Are you willing to do live shows?
              </FormLabel>
              <RadioGroup value={formData.liveShows} onChange={handleRadioChange("liveShows")} row>
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
                <FormControlLabel value="maybe" control={<Radio />} label="Maybe, need details" />
              </RadioGroup>

              <FormSectionTitle variant="h6">Special Skills & Experience</FormSectionTitle>
              <TextField
                label="Any special skills or talents?"
                value={formData.specialSkills}
                onChange={handleChange("specialSkills")}
                multiline
                rows={3}
                fullWidth
              />

              <FormSectionTitle variant="h6">Partnership & Expectations</FormSectionTitle>
              <TextField
                required
                label="What % do you think is fair for our partnership?"
                value={formData.partnershipPercentage}
                error={errors.partnershipPercentage}
                helperText={errors.partnershipPercentage && "Required"}
                onChange={handleChange("partnershipPercentage")}
                fullWidth
              />

              <FormSectionTitle variant="h6">Additional Information</FormSectionTitle>
              <TextField
                required
                label="Why do you want to work with Valhalla Girls?"
                value={formData.motivation}
                error={errors.motivation}
                helperText={errors.motivation && "Required"}
                onChange={handleChange("motivation")}
                multiline
                rows={2}
                fullWidth
              />
              <TextField
                label="Anything else you'd like us to know?"
                value={formData.additionalInfo}
                onChange={handleChange("additionalInfo")}
                multiline
                rows={2}
                fullWidth
              />
            </FormContainer>
          </Box>
        )}
      </DialogContent>

      <DialogActions>
        <ButtonCustom onClick={handleClose}>Close</ButtonCustom>
        {!success && <ButtonCustom onClick={handleSubmit}>Submit</ButtonCustom>}
      </DialogActions>
    </Dialog>
  )
}

export default ModalForm
