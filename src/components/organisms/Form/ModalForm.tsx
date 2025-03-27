import React, { useState } from "react"
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
} from "@mui/material"
import { FormContainer, FormSectionTitle } from "./ModalForm.styles"
import ButtonCustom from "@/components/atoms/ButtonCustom/ButtonCustom"

interface ModalFormProps {
  open: boolean
  handleClose: () => void
}

const ModalForm: React.FC<ModalFormProps> = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    age: "",
    phoneNumber: "",
    email: "",
    location: "",
    instagram: "",
    tiktok: "",
    twitter: "",
    onlyfans: "",
    otherLinks: "",
    hoursPerWeek: "",
    adultContentExperience: "",
    cameraSetup: "",
    liveShows: "",
    specialSkills: "",
    partnershipPercentage: "",
    motivation: "",
    additionalInfo: "",
  })

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [field]: event.target.value }))
  }

  const handleRadioChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: event.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch("/api/send-form-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        console.log("Form successfully sent!")
        handleClose()
      } else {
        console.error("Error sending form:", await response.text())
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <Dialog open={open} onClose={handleClose} scroll="paper" fullWidth maxWidth="sm">
      <DialogContent dividers>
        <Box component="form" onSubmit={handleSubmit}>
          <FormContainer>
            <FormSectionTitle variant="h6">Personal Information</FormSectionTitle>
            <TextField label="Full Name" value={formData.fullName} onChange={handleChange("fullName")} fullWidth />
            <TextField
              label="Date of Birth (MM/DD/YYYY)"
              value={formData.dateOfBirth}
              onChange={handleChange("dateOfBirth")}
              fullWidth
            />
            <TextField label="Age" value={formData.age} onChange={handleChange("age")} fullWidth />
            <TextField
              label="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange("phoneNumber")}
              fullWidth
            />
            <TextField label="Email Address" value={formData.email} onChange={handleChange("email")} fullWidth />
            <TextField
              label="Location (City, State/Country)"
              value={formData.location}
              onChange={handleChange("location")}
              fullWidth
            />

            <FormSectionTitle variant="h6">Social Media & Online Presence</FormSectionTitle>
            <TextField
              label="Instagram Handle"
              value={formData.instagram}
              onChange={handleChange("instagram")}
              fullWidth
            />
            <TextField label="TikTok Handle" value={formData.tiktok} onChange={handleChange("tiktok")} fullWidth />
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
            <FormLabel>How many hours per week can you dedicate to creating content?</FormLabel>
            <RadioGroup value={formData.hoursPerWeek} onChange={handleRadioChange("hoursPerWeek")}>
              <FormControlLabel value="lessThan10" control={<Radio />} label="Less than 10 hours" />
              <FormControlLabel value="10-20" control={<Radio />} label="10-20 hours" />
              <FormControlLabel value="20-30" control={<Radio />} label="20-30 hours" />
              <FormControlLabel value="30+" control={<Radio />} label="30+ hours" />
            </RadioGroup>

            <FormLabel>Do you have experience creating adult/fantasy content?</FormLabel>
            <RadioGroup
              value={formData.adultContentExperience}
              onChange={handleRadioChange("adultContentExperience")}
              row
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>

            <FormLabel>Do you have a professional camera/phone setup?</FormLabel>
            <RadioGroup value={formData.cameraSetup} onChange={handleRadioChange("cameraSetup")} row>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="noInvest" control={<Radio />} label="No, but I am willing to invest" />
              <FormControlLabel value="noGuidance" control={<Radio />} label="No, I need guidance" />
            </RadioGroup>

            <FormLabel>Are you willing to do live shows?</FormLabel>
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
              label="What % do you think is fair for our partnership?"
              value={formData.partnershipPercentage}
              onChange={handleChange("partnershipPercentage")}
              fullWidth
            />

            <FormSectionTitle variant="h6">Additional Information</FormSectionTitle>
            <TextField
              label="Why do you want to work with Valhalla Girls?"
              value={formData.motivation}
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
      </DialogContent>

      <DialogActions>
        <ButtonCustom onClick={handleClose}>Close</ButtonCustom>
        <ButtonCustom onClick={handleSubmit}>Submit</ButtonCustom>
      </DialogActions>
    </Dialog>
  )
}

export default ModalForm
