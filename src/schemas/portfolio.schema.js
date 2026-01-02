import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        assetType: {
            type: String,
            enum: ['commodity', 'currency', 'intraday', 'future', 'delivery', 'option'],
            required: true,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        initialPrice: {
            type: Number,
            required: true,
        },
        currentPrice: {
            type: Number,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model('Portfolio', portfolioSchema);