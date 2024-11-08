import userModel from "../models/userModel.js";

// Function to cleanup users with googleId: null
const cleanupUsers = async () => {
    try {
        await userModel.deleteMany({ googleId: null });
        console.log('All users with googleId: null have been deleted.');
    } catch (error) {
        console.error('Error cleaning up users:', error);
    }
};

// Call this cleanup function when the server starts
cleanupUsers();
