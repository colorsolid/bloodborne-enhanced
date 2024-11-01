# -*- coding: utf-8 -*-
def t210660_1():
    """State 0"""
    while True:
        """State 1"""
        call = t210660_x2()
        assert IsClientPlayer() == 1
        """State 2"""
        call = t210660_x3()
        assert not IsClientPlayer()

# broken lamp

def t210660_x0(actionbutton1=6104, flag1=6000, flag2=6001, flag3=6001, flag4=6001, flag5=6001, flag6=6001,
               flag7=6001):
    """State 0"""
    while True:
        """State 1"""
        assert (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer()
                and not IsPlayerDead() and not IsCharacterDisabled())
        """State 3"""
        assert (GetEventStatus(flag1) == 1 or GetEventStatus(flag2) == 1 or GetEventStatus(flag3) ==
                1 or GetEventStatus(flag4) == 1 or GetEventStatus(flag5) == 1 or GetEventStatus(flag6)
                == 1 or GetEventStatus(flag7) == 1)
        """State 2"""
        def ExitPause():
            SetTalkTime(0.5)
        if (not GetEventStatus(flag1) and not GetEventStatus(flag2) and not GetEventStatus(flag3) and
            not GetEventStatus(flag4) and not GetEventStatus(flag5) and not GetEventStatus(flag6) and
            not GetEventStatus(flag7)):
            pass
        elif CheckActionButtonArea(actionbutton1):
            break
        elif (not (not GetOneLineHelpStatus() and not IsTalkingToSomeoneElse() and not IsClientPlayer()
              and not IsPlayerDead() and not IsCharacterDisabled())):
            pass
    """State 4"""
    return 0

def t210660_x1():
    """State 0,1"""
    ForceCloseMenu()
    """State 2"""
    return 0

def t210660_x2():
    """State 0"""
    while True:
        """State 3"""
        assert (t210660_x0(actionbutton1=6104, flag1=6000, flag2=6001, flag3=6001, flag4=6001, flag5=6001,
                flag6=6001, flag7=6001))
        """State 1"""
        if (GetEventStatus(12102042) == 0):
            OpenGenericDialog(1, 200113, 1, 0, 1)
            def WhilePaused():
                SetTalkTime(0.33)
        else:
            call = t210660_x4()
            if call.Done():
                pass
            elif GetDistanceToPlayer() > 3:
                """State 2"""
                assert t210660_x1()
    """Unused"""
    """State 4"""
    return 0

def t210660_x3():
    """State 0,1"""
    DebugEvent('ゲスト待機')
    Quit()
    """Unused"""
    """State 2"""
    return 0

# top level
def t210660_x4():
    while True:
        ClearTalkListData()
        AddTalkListData(1, 200121, -1) # remember foes
        AddTalkListData(2, 200122, 12102043) # distorted memories
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            break
        elif GetTalkListEntryResult() == 1: # remember foes
            call = t210660_x5()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                return 0
        elif GetTalkListEntryResult() == 2: # distorted memories
            call = t210660_x6()
            if call.Get() == 1:
                ForceCloseMenu()
            elif call.Done():
                return 0
    return 0

# standard
def t210660_x5():
    while True:
        ClearTalkListData()
        AddTalkListData(1, 200045, 12411700) # cleric beast
        AddTalkListData(2, 200046, 12411800) # gascoigne
        AddTalkListData(3, 200047, 12401800) # amelia
        AddTalkListData(4, 200048, 12301800) # bsb
        AddTalkListData(5, 200049, 12201800) # witches
        AddTalkListData(6, 200050, 12701800) # shadows
        AddTalkListData(7, 200051, 13201800) # rom
        AddTalkListData(8, 200052, 12301700) # paarl
        AddTalkListData(9, 200053, 12801800) # one reborn
        AddTalkListData(10, 200054, 13301800) # amygdala
        AddTalkListData(11, 200055, 12601850) # micolash
        AddTalkListData(12, 200056, 12601800) # wet nurse
        AddTalkListData(13, 200057, 12421700) # celestial emissary
        AddTalkListData(14, 200058, 12421800) # ebrietas
        AddTalkListData(15, 200059, 12501800) # logarius
        AddTalkListData(16, 200060, 12101800) # gehrman
        AddTalkListData(17, 200061, 12101850) # moon presence
        AddTalkListData(18, 200062, 13401800) # ludwig
        AddTalkListData(19, 200063, 13401850) # lawrence
        AddTalkListData(20, 200064, 13501850) # living failures
        AddTalkListData(21, 200065, 13501800) # maria
        AddTalkListData(22, 200066, 13601800) # orphan
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # cleric beast
            SetEventState(12100650, 1)
            SetEventState(12411700+11, 1)
            pass
        elif GetTalkListEntryResult() == 2: # gascoigne *
            SetEventState(12100650, 1)
            SetEventState(12411800+11, 1)
        elif GetTalkListEntryResult() == 3: # amelia *
            SetEventState(12100650, 1)
            SetEventState(12401800+11, 1)
        elif GetTalkListEntryResult() == 4: # bsb
            SetEventState(12100650, 1)
            SetEventState(12301800+11, 1)
        elif GetTalkListEntryResult() == 5: # witches
            SetEventState(12100650, 1)
            SetEventState(12201800+11, 1)
        elif GetTalkListEntryResult() == 6: # shadows
            SetEventState(12100650, 1)
            SetEventState(12701800+11, 1)
        elif GetTalkListEntryResult() == 7: # rom
            SetEventState(12100650, 1)
            SetEventState(13201800+11, 1)
        elif GetTalkListEntryResult() == 8: # paarl
            SetEventState(12100650, 1)
            SetEventState(12301700+11, 1)
        elif GetTalkListEntryResult() == 9: # one reborn *
            SetEventState(12100650, 1)
            SetEventState(12801800+11, 1)
        elif GetTalkListEntryResult() == 10: # amygdala
            SetEventState(12100650, 1)
            SetEventState(13301800+11, 1)
        elif GetTalkListEntryResult() == 11: # micolash *
            SetEventState(12100650, 1)
            SetEventState(12601850+11, 1)
        elif GetTalkListEntryResult() == 12: # wet nurse *
            SetEventState(12100650, 1)
            SetEventState(12601800+11, 1)
        elif GetTalkListEntryResult() == 13: # celestial emissary
            SetEventState(12100650, 1)
            SetEventState(12421700+11, 1)
        elif GetTalkListEntryResult() == 14: # ebrietas
            SetEventState(12100650, 1)
            SetEventState(12421800+11, 1)
        elif GetTalkListEntryResult() == 15: # logarius *
            SetEventState(12100650, 1)
            SetEventState(12501800+11, 1)
        elif GetTalkListEntryResult() == 16: # gehrman *
            SetEventState(12100650, 1)
            SetEventState(12101800+11, 1)
        elif GetTalkListEntryResult() == 17: # moon presence *
            SetEventState(12100650, 1)
            SetEventState(12101850+11, 1)
        elif GetTalkListEntryResult() == 18: # ludwig * 
            SetEventState(12100650, 1)
            SetEventState(13401800+11, 1)
        elif GetTalkListEntryResult() == 19: # laurence *
            SetEventState(12100650, 1)
            SetEventState(13401850+11, 1)
        elif GetTalkListEntryResult() == 20: # living failures
            SetEventState(12100650, 1)
            SetEventState(13501850+11, 1)
        elif GetTalkListEntryResult() == 21: # maria *
            SetEventState(12100650, 1)
            SetEventState(13501800+11, 1)
        elif GetTalkListEntryResult() == 22: # orphan *
            SetEventState(12100650, 1)
            SetEventState(13601800+11, 1)
        return 0

# distorted
def t210660_x6():
    while True:
        ClearTalkListData()
        AddTalkListData(1, 200123, 12411800) # gascoignes
        AddTalkListData(9, 200160, 12601800) # nurses
        AddTalkListData(10, 200159, 12101850) # gherman and moon prescence
        AddTalkListData(12, 200125, 13401800) # ludwigs
        # AddTalkListData(13, 200126, 12411700) # laurences
        AddTalkListData(14, 200124, 13601800) # orphans
        ShowShopMessage(0, 0, 0)
        def WhilePaused():
            SetTalkTime(0.33)
        if not GetTalkListEntryResult() or not IsTalkExclusiveMenuOpen():
            return 1
        elif GetTalkListEntryResult() == 1: # gascoignes
            SetEventState(12100650, 1)
            SetEventState(12411800+11, 1)
            SetEventState(12411800+14, 1)
        elif GetTalkListEntryResult() == 9: # nurses
            SetEventState(12100650, 1)
            SetEventState(12601800+11, 1)
            SetEventState(12601800+14, 1)
        elif GetTalkListEntryResult() == 10: # gherman and moon prescence
            SetEventState(12100650, 1)
            SetEventState(12101800+11, 1)
            SetEventState(12101850+11, 1)
            SetEventState(12101850+14, 1)
        elif GetTalkListEntryResult() == 12: # ludwigs
            SetEventState(12100650, 1)
            SetEventState(13401800+11, 1)
            SetEventState(13401800+14, 1)
        # elif GetTalkListEntryResult() == 13: # laurences
        #     SetEventState(12100650, 1)
        #     SetEventState(13401850+11, 1)
        #     SetEventState(13401850+14, 1)
        elif GetTalkListEntryResult() == 14: # orphans
            SetEventState(12100650, 1)
            SetEventState(13501800+11, 1)
            SetEventState(13601800+14, 1)
        return 0
