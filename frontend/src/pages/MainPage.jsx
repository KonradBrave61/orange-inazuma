import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Navigation from '../components/Navigation';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { mockCharacters } from '../data/mock';
import CharacterCard from '../components/CharacterCard';
import CharacterModal from '../components/CharacterModal';
import { Play, Users, Trophy, Target, Star, TrendingUp, Clock, Award, LogIn } from 'lucide-react';

const MainPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [showCharacterModal, setShowCharacterModal] = useState(false);

  const featuredCharacters = mockCharacters.slice(0, 4);
  const recentActivity = [
    { type: 'team', message: 'Team updated with new formation', time: '2 minutes ago' },
    { type: 'character', message: 'New character unlocked: Axel Blaze', time: '1 hour ago' },
    { type: 'match', message: 'Victory against Royal Academy', time: '3 hours ago' },
    { type: 'level', message: 'Reached coach level 50', time: '1 day ago' },
  ];

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
    setShowCharacterModal(true);
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'team': return <Users className="h-4 w-4" />;
      case 'character': return <Star className="h-4 w-4" />;
      case 'match': return <Trophy className="h-4 w-4" />;
      case 'level': return <TrendingUp className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'team': return 'text-orange-400';
      case 'character': return 'text-yellow-400';
      case 'match': return 'text-green-400';
      case 'level': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-800 to-orange-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <h1 className="text-6xl font-bold text-white mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Inazuma Eleven
            </h1>
            <h2 className="text-3xl font-semibold text-orange-300 mb-2">
              Victory Road
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Build your ultimate team, master powerful techniques, and lead your squad to victory in the most intense football battles!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg"
                  onClick={() => navigate('/team-builder')}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Start Building Team
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-orange-400/30 hover:bg-orange-700/30 px-8 py-4 text-lg"
                  onClick={() => navigate('/characters')}
                >
                  <Users className="mr-2 h-5 w-5" />
                  View Characters
                </Button>
              </>
            ) : (
              <>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg"
                  onClick={() => navigate('/login')}
                >
                  <LogIn className="mr-2 h-5 w-5" />
                  Sign In to Start
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-orange-400/30 hover:bg-orange-700/30 px-8 py-4 text-lg"
                  onClick={() => navigate('/characters')}
                >
                  <Users className="mr-2 h-5 w-5" />
                  Browse Characters
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-black/30 backdrop-blur-lg border-orange-400/20 text-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{mockCharacters.length}</div>
                  <div className="text-sm text-gray-300">Characters</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/30 backdrop-blur-lg border-orange-400/20 text-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">15</div>
                  <div className="text-sm text-gray-300">Tactics</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/30 backdrop-blur-lg border-orange-400/20 text-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{user ? 8 : '?'}</div>
                  <div className="text-sm text-gray-300">Victories</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/30 backdrop-blur-lg border-orange-400/20 text-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{user ? user.coachLevel || 1 : '?'}</div>
                  <div className="text-sm text-gray-300">Coach Level</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Characters */}
          <div className="lg:col-span-2">
            <Card className="bg-black/30 backdrop-blur-lg border-orange-400/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-orange-400" />
                  Featured Characters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {featuredCharacters.map((character) => (
                    <CharacterCard
                      key={character.id}
                      character={character}
                      onClick={() => handleCharacterClick(character)}
                      viewMode="grid"
                    />
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button
                    variant="outline"
                    className="text-white border-orange-400/30 hover:bg-orange-700/30"
                    onClick={() => navigate('/characters')}
                  >
                    View All Characters
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-1">
            <Card className="bg-black/30 backdrop-blur-lg border-orange-400/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-400" />
                  {user ? 'Recent Activity' : 'Getting Started'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {user ? (
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-orange-600/20 ${getActivityColor(activity.type)}`}>
                          {getActivityIcon(activity.type)}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-white">
                            {activity.message}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            {activity.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-center py-4">
                      <LogIn className="h-12 w-12 text-orange-400 mx-auto mb-4" />
                      <p className="text-white font-medium mb-2">Welcome to Inazuma Eleven!</p>
                      <p className="text-sm text-gray-300 mb-4">Sign in to save teams, track progress, and unlock features.</p>
                      <Button
                        className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                        onClick={() => navigate('/login')}
                      >
                        <LogIn className="h-4 w-4 mr-2" />
                        Sign In Now
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="mt-6 bg-black/30 backdrop-blur-lg border-orange-400/20 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-orange-400" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full text-white border-orange-400/30 hover:bg-orange-700/30 justify-start"
                    onClick={() => user ? navigate('/team-builder') : navigate('/login')}
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Team Builder
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full text-white border-orange-400/30 hover:bg-orange-700/30 justify-start"
                    onClick={() => navigate('/characters')}
                  >
                    <Star className="mr-2 h-4 w-4" />
                    Characters
                  </Button>
                  {user && (
                    <Button
                      variant="outline"
                      className="w-full text-white border-orange-400/30 hover:bg-orange-700/30 justify-start"
                      onClick={() => navigate('/profile')}
                    >
                      <Award className="mr-2 h-4 w-4" />
                      Profile
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Character Modal */}
      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          isOpen={showCharacterModal}
          onClose={() => setShowCharacterModal(false)}
          allCharacters={mockCharacters}
        />
      )}
    </div>
  );
};

export default MainPage;