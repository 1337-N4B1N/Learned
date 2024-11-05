"use server"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"
import User from "@/models/User"
/**
 * Initiates a PayPal payment
 */
export const initiate = async (amount, to_username, paymentform) => {
    try {
        await connectDB()
        
        // Validate inputs
        if (!amount || !to_username || !paymentform) {
            throw new Error("Missing required parameters")
        }

        // Verify recipient exists
        const recipient = await User.findOne({ username: to_username })
        if (!recipient) {
            throw new Error("Recipient not found")
        }

        // Create payment record
        const payment = await Payment.create({
            amount: Number(amount),
            to_user: to_username,
            name: paymentform.name,
            message: paymentform.message,
            status: 'pending'
        })

        return {
            success: true,
            payment: payment
        }
    } catch (error) {
        // console.error("Payment initiation error:", error)
        throw new Error(`Failed to initiate payment: ${error.message}`)
    }
}

/**
 * Fetches user data by username
 */
export const fetchuser = async (username) => {
    try {
        if (!username) {
            throw new Error("Username is required")
        }

        await connectDB()
        const user = await User.findOne({ username }).lean()
        
        if (!user) {
            return null
        }

        // Remove sensitive fields if any
        const { password, ...safeUser } = user
        return safeUser

    } catch (error) {
        // console.error("Fetch user error:", error)
        throw new Error(`Failed to fetch user: ${error.message}`)
    }
}

/**
 * Fetches payments for a user
 */
export const fetchpayments = async (username) => {
    try {
        if (!username) {
            throw new Error("Username is required")
        }

        await connectDB()
        const payments = await Payment.find({
            to_user: username,
            done: true
        })
        .sort({ amount: -1, createdAt: -1 }).limit(7)
        .lean()

        return payments

    } catch (error) {
        // console.error("Fetch payments error:", error)
        throw new Error(`Failed to fetch payments: ${error.message}`)
    }
}

/**
 * Updates user profile
 */
export const updateProfile = async (data, oldusername) => {
    try {
        if (!data || !oldusername) {
            throw new Error("Missing required parameters")
        }

        await connectDB()

        // Validate the email exists
        const existingUser = await User.findOne({ username: oldusername })
        if (!existingUser) {
            throw new Error("User not found")
        }

        // If username is being changed, check if new username is available
        if (data.username && data.username !== oldusername) {
            const usernameExists = await User.findOne({ 
                username: data.username,
                _id: { $ne: existingUser._id } // Exclude current user
            })
            
            if (usernameExists) {
                throw new Error("Username already taken")
            }
        }

        // Update user data
        const updatedUser = await User.findOneAndUpdate(
            { username: oldusername },
            { 
                $set: {
                    name: data.name,
                    email: data.email,
                    username: data.username,
                    profilepic: data.profilepic,
                    coverpic: data.coverpic,
                    paypalid: data.paypalid,
                    paypalsecret: data.paypalsecret
                }
            },
            { new: true, runValidators: true }
        ).lean()

        if (!updatedUser) {
            throw new Error("Failed to update user")
        }

        // Remove sensitive fields if any
        const { password, ...safeUser } = updatedUser
        return safeUser

    } catch (error) {
        // console.error("Update profile error:", error)
        throw new Error(`Failed to update profile: ${error.message}`)
    }
}

// Optional: Add a function to validate PayPal credentials
export const validatePayPalCredentials = async (username) => {
    try {
        await connectDB()
        const user = await User.findOne({ username }).select('paypalid paypalsecret')
        
        if (!user || !user.paypalid || !user.paypalsecret) {
            throw new Error("PayPal credentials not found")
        }

        // Here you could add actual PayPal API validation if needed
        
        return { success: true }

    } catch (error) {
        // console.error("PayPal validation error:", error)
        throw new Error(`Failed to validate PayPal credentials: ${error.message}`)
    }
}