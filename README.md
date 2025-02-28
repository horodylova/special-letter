# Special Letter Project README

## Overview

Special Letter is a full-stack application that allows users to write letters to their future selves. Users can compose messages, schedule them for delivery at a specific future date, and enjoy the experience of receiving their past thoughts when that date arrives.

## Address
- Website: [https://special-letter-theta.vercel.app/](https://special-letter-theta.vercel.app/)
- Backend Repository: [https://github.com/horodylova/special-leter-backend](https://github.com/horodylova/special-leter-backend)

## Features

- **Time Capsule Letters**: Write messages to your future self that will only be accessible on the specified date
- **Secure Storage**: All letter content is encrypted for privacy and security
- **Organized by Year**: Letters are automatically sorted into folders by year
- **Immediate Testing**: Create letters with today's date to immediately test the experience

## Technology Stack

- **Frontend**: React
- **Backend**: Node.js
- **Database**: PostgreSQL
- **Authentication**: JWT token-based authentication

## How It Works

### Letter Creation
1. Users compose a letter through the React-based interface
2. They select a future date when the letter should be accessible
3. The letter is sent to the backend for processing

### Storage Process
1. The backend controller receives the letter and forwards it to the model
2. The letter's content is encrypted using a 32-character key stored on the backend
3. The encrypted letter is saved in the PostgreSQL database
4. Letter metadata is organized by year for easy retrieval

### Letter Retrieval
1. When users log in, they can view all their previously written letters
2. Letters with future opening dates remain locked and cannot be opened or deleted
3. When the scheduled opening date arrives:
   - The system uses the encryption key to decode the letter
   - The decryption function restores the original text with proper formatting
   - The letter becomes available for reading

## Security Features

- **Content Encryption**: All letter content is encrypted before storage
- **Date Verification Protocol**: The system verifies past, present, and future dates
- **Console Protection**: Prevents unauthorized access to letter content via browser console

  ## Letter Encryption Process

Special Letter uses encryption to ensure your messages remain private until their scheduled opening date. Below is a visual demonstration of how the encryption and decryption process works:

### 1. Original Letter Content
![Original letter before encryption](assets/1.jpg)
*The user's original letter content as written in the interface*

### 2. Encrypted Storage
![Encrypted letter in database](assets/2.jpg)
*How the encrypted letter appears when stored in the database*

### 3. Decrypted Letter on Opening Date
![Decrypted letter when opened](assets/3.jpg)
*The decrypted letter as it appears to the user on the scheduled opening date*

This encryption process ensures that even if someone gained access to the database, they would not be able to read the contents of your letters without the encryption key.

## Getting Started

### Prerequisites
- Node.js
- PostgreSQL

### Installation
1. Clone the repository
   ```
   git clone https://github.com/yourusername/special-letter.git
   cd special-letter
   ```

2. Install dependencies for backend
   ```
   cd backend
   npm install
   ```

3. Install dependencies for frontend
   ```
   cd ../frontend
   npm install
   ```

4. Set up the PostgreSQL database
   ```
   CREATE DATABASE special_letter;
   ```

5. Configure environment variables
   Create a `.env` file in the backend directory with:
   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=special_letter
   DB_USER=your_username
   DB_PASSWORD=your_password
   JWT_SECRET=your_jwt_secret
   ENCRYPTION_KEY=your_32_character_key
   ```

### Running the Application
1. Start the backend server
   ```
   cd backend
   npm start
   ```

2. Start the frontend development server
   ```
   cd frontend
   npm start
   ```

3. Access the application at `http://localhost:3000`

## Testing
Create a letter with today's date to test the complete flow immediately. The letter will be accessible right away.

## Deployment
The application can be deployed on any hosting service that supports Node.js and PostgreSQL.

## Future Development
- Mobile application
- Email notifications when letters become available
- Rich text formatting options
- Image and attachment support
 

## Author
Svitlana Horodylova

